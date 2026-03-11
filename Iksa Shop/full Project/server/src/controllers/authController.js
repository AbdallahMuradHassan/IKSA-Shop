// src/controllers/authController.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";

// ====================== REGISTER ======================
export const register = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ success: false, message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({ email, password: hashedPassword, role: "user" });

    res.status(201).json({ success: true, message: "User registered successfully" });
});

// ====================== LOGIN ======================
export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ success: false, message: "Invalid credentials" });

    const accessToken = generateAccessToken({ id: user._id, role: user.role });
    const refreshToken = generateRefreshToken(user._id);

    // Atomic push of refresh token
    await User.findByIdAndUpdate(
        user._id,
        {
            $push: { refreshTokens: { token: refreshToken, expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) } }
        }
    );

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false, // set true in production
        sameSite: "strict",
        path: "/api/v1/auth/refresh",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ success: true, message: "Login successful", accessToken });
});

// ====================== REFRESH TOKEN ======================
export const refresh = asyncHandler(async (req, res) => {
    const token = req.cookies.refreshToken;
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
        if (err) return res.sendStatus(403);

        const userId = decoded.userId;

        // Step 1: Revoke the old token
        const revoked = await User.findOneAndUpdate(
            { _id: userId, "refreshTokens.token": token, "refreshTokens.revoked": false },
            { $set: { "refreshTokens.$.revoked": true } },
            { returnDocument: "after" } // replaces deprecated { new: true }
        );

        if (!revoked) return res.sendStatus(403);

        // Step 2: Push the new token
        const newRefreshToken = generateRefreshToken(userId);
        await User.findByIdAndUpdate(
            userId,
            {
                $push: {
                    refreshTokens: {
                        token: newRefreshToken,
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                        revoked: false
                    }
                }
            }
        );

        // Issue new access token
        const newAccessToken = generateAccessToken({ id: revoked._id, role: revoked.role });

        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: false, // set true in production
            sameSite: "lax",
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.json({ accessToken: newAccessToken });
    });
});


// ====================== LOGOUT ======================
export const logout = asyncHandler(async (req, res) => {
    const token = req.cookies.refreshToken;
    if (token) {
        // Revoke token atomically
        await User.updateOne(
            { "refreshTokens.token": token },
            { $set: { "refreshTokens.$.revoked": true } }
        );
    }

    res.clearCookie("refreshToken", { path: "/api/v1/auth/refresh" });
    res.sendStatus(204);
});