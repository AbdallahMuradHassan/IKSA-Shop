import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    return res.status(422).json({
        success: false,
        message: "Validation error",
        errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    });
};

// Global error handler
export const errorHandler = (err, req, res, next) => {
    console.error("Error:", err.message);

    const status = err.statusCode || 500;
    res.status(status).json({
        success: false,
        message: err.message || "Server error",
    });
};

// 404 handler
export const notFound = (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route not found: ${req.method} ${req.originalUrl}`,
    });
};