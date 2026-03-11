import { body, param } from "express-validator";
import mongoose from "mongoose";

export const createProductValidator = [
    body("name")
        .notEmpty().withMessage("Product name is required")
        .isLength({ min: 2 }).withMessage("Name must be at least 2 characters"),
    body("price")
        .notEmpty().withMessage("Price is required")
        .isFloat({ min: 0 }).withMessage("Price must be a positive number"),
    body("category")
        .notEmpty().withMessage("Category ID is required")
        .bail()
        .custom((value) => mongoose.Types.ObjectId.isValid(value))
        .withMessage("Invalid Category ID"),
    body("supplier")
        .notEmpty().withMessage("Supplier ID is required")
        .bail()
        .custom((value) => mongoose.Types.ObjectId.isValid(value))
        .withMessage("Invalid Supplier ID"),
    body("inStock").optional().isBoolean().withMessage("inStock must be true or false"),
    body("images").optional().isArray().withMessage("Images must be an array of URLs"),
];

export const updateProductValidator = [
    param("id")
        .notEmpty().withMessage("Product ID is required")
        .bail()
        .custom((value) => mongoose.Types.ObjectId.isValid(value))
        .withMessage("Invalid Product ID"),
    body("name").optional().isLength({ min: 2 }).withMessage("Name must be at least 2 characters"),
    body("price").optional().isFloat({ min: 0 }).withMessage("Price must be a positive number"),
    body("category").optional().custom((value) => mongoose.Types.ObjectId.isValid(value)).withMessage("Invalid Category ID"),
    body("supplier").optional().custom((value) => mongoose.Types.ObjectId.isValid(value)).withMessage("Invalid Supplier ID"),
    body("inStock").optional().isBoolean().withMessage("inStock must be true or false"),
    body("images").optional().isArray().withMessage("Images must be an array of URLs"),
];

export const productIdValidator = [
    param("id")
        .notEmpty().withMessage("Product ID is required")
        .bail()
        .custom((value) => mongoose.Types.ObjectId.isValid(value))
        .withMessage("Invalid Product ID"),
];