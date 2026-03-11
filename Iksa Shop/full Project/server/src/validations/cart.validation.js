import { body, param } from "express-validator";
import mongoose from "mongoose";

// Add to Cart validation
export const addToCartValidator = [
    body("productId")
        .notEmpty()
        .withMessage("Product ID is required")
        .bail()
        .custom((value) => mongoose.Types.ObjectId.isValid(value))
        .withMessage("Invalid Product ID"),

    body("quantity")
        .notEmpty()
        .withMessage("Quantity is required")
        .bail()
        .isInt({ min: 1 })
        .withMessage("Quantity must be a positive integer"),
];

// Remove from Cart validation
export const removeFromCartValidator = [
    param("productId")
        .notEmpty()
        .withMessage("Product ID is required")
        .bail()
        .custom((value) => mongoose.Types.ObjectId.isValid(value))
        .withMessage("Invalid Product ID"),
];