import { body, param } from "express-validator";
import mongoose from "mongoose";

export const updateInventoryValidator = [
    param("productId")
        .notEmpty().withMessage("Product ID is required")
        .bail()
        .custom(value => mongoose.Types.ObjectId.isValid(value)).withMessage("Invalid Product ID"),
    body("quantity")
        .notEmpty().withMessage("Quantity is required")
        .bail()
        .isInt({ min: 0 }).withMessage("Quantity must be a non-negative integer"),
];