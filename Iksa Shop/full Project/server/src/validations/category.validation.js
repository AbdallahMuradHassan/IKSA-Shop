import { body, param } from "express-validator";
import mongoose from "mongoose";

// Validate category creation
export const createCategoryValidator = [
    body("name")
        .notEmpty().withMessage("Category name is required")
        .isLength({ min: 2, max: 100 }).withMessage("Name must be 2-100 characters"),
    body("description")
        .optional()
        .isLength({ max: 500 }).withMessage("Description cannot exceed 500 characters"),
    body("isActive")
        .optional()
        .isBoolean().withMessage("isActive must be true or false"),
];

// Validate category update
export const updateCategoryValidator = [
    param("id")
        .notEmpty().withMessage("Category ID is required")
        .bail()
        .custom((value) => mongoose.Types.ObjectId.isValid(value))
        .withMessage("Invalid Category ID"),
    body("name")
        .optional()
        .isLength({ min: 2, max: 100 }).withMessage("Name must be 2-100 characters"),
    body("description")
        .optional()
        .isLength({ max: 500 }).withMessage("Description cannot exceed 500 characters"),
    body("isActive")
        .optional()
        .isBoolean().withMessage("isActive must be true or false"),
];

// Validate category ID param
export const categoryIdValidator = [
    param("id")
        .notEmpty().withMessage("Category ID is required")
        .bail()
        .custom((value) => mongoose.Types.ObjectId.isValid(value))
        .withMessage("Invalid Category ID"),
];