import { body, param } from "express-validator";
import mongoose from "mongoose";

// Validation for creating a supplier
export const createSupplierValidator = [
    body("name")
        .notEmpty().withMessage("Supplier name is required")
        .isLength({ min: 2 }).withMessage("Name must be at least 2 characters"),
    body("email").optional().isEmail().withMessage("Invalid email format"),
    body("phone").optional().isString().withMessage("Phone must be a string"),
    body("address").optional().isString().withMessage("Address must be a string"),
    body("isActive").optional().isBoolean().withMessage("isActive must be true or false")
];

// Validation for updating a supplier
export const updateSupplierValidator = [
    param("id")
        .notEmpty().withMessage("Supplier ID is required")
        .bail()
        .custom(value => mongoose.Types.ObjectId.isValid(value))
        .withMessage("Invalid Supplier ID"),
    body("name").optional().isLength({ min: 2 }).withMessage("Name must be at least 2 characters"),
    body("email").optional().isEmail().withMessage("Invalid email format"),
    body("phone").optional().isString(),
    body("address").optional().isString(),
    body("isActive").optional().isBoolean()
];

// Validation for supplier ID param
export const supplierIdValidator = [
    param("id")
        .notEmpty().withMessage("Supplier ID is required")
        .bail()
        .custom(value => mongoose.Types.ObjectId.isValid(value))
        .withMessage("Invalid Supplier ID")
];