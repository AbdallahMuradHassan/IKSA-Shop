import { asyncHandler } from "../utils/asyncHandler.js";

// GET /api/users/profile (protected)
export const profile = asyncHandler(async (req, res) => {
    res.json({
        success: true,
        data: {
            id: req.user._id,
            email: req.user.email,
            role: req.user.role,
        },
    });
});

// GET /api/users/admin-only (protected + role)
export const adminOnly = asyncHandler(async (req, res) => {
    res.json({
        success: true,
        message: "Welcome admin",
    });
});