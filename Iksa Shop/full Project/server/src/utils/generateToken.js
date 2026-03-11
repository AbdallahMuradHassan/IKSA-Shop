import jwt from "jsonwebtoken";

export const generateAccessToken = (payload) => {
    const secret = process.env.JWT_SECRET;
    const expiresIn = process.env.JWT_EXPIRES_IN || "15m";

    if (!secret) throw new Error("JWT_SECRET is missing in .env");

    return jwt.sign(payload, secret, { expiresIn });
};
export const generateRefreshToken = (userId) => {
    return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d",
    });
};