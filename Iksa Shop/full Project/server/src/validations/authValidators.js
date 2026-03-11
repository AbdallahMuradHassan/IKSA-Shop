import { body } from "express-validator";

export const registerValidator = [

    body("email")
        .isEmail()
        .withMessage("Valid email is required")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        .withMessage("Please enter a valid email")
        .normalizeEmail(),
    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters")
        .matches(/[A-Z]/).withMessage("Password must include an uppercase letter")
        .matches(/[a-z]/).withMessage("Password must include a lowercase letter")
        .matches(/[0-9]/).withMessage("Password must include a number")
        .matches(/[^A-Za-z0-9]/).withMessage("Password must include a symbol"),

    body("firstName")
        .isEmpty().withMessage("first name is required")
        .isLength({ min: 2, max: 50 })
        .withMessage("First name must be between 2 and 50 characters"),

    body("lastName")
        .isEmpty().withMessage("lastName is required")
        .isLength({ min: 2, max: 50 })
        .withMessage("Last name must be between 2 and 50 characters"),

    body("phone")
        .isEmpty().withMessage("Phone number is required")
        .matches(/^\+?[0-9]{7,15}$/)
        .withMessage("Invalid phone number"),

    // Billing validation
    body("billing.name")
        .optional()
        .isLength({ max: 100 })
        .withMessage("Billing name too long"),

    body("billing.address")
        .optional()
        .isLength({ max: 200 })
        .withMessage("Billing address too long"),

    body("billing.vatNumber")
        .optional()
        .isLength({ max: 50 })
        .withMessage("VAT number too long"),

    // Location validation
    body("location.address")
        .optional()
        .isLength({ max: 200 })
        .withMessage("Address too long"),

    body("location.city")
        .optional()
        .isLength({ max: 100 })
        .withMessage("City name too long"),

    body("location.country")
        .optional()
        .isLength({ max: 100 })
        .withMessage("Country name too long"),

    body("location.postalCode")
        .optional()
        .isPostalCode("any").withMessage("Invalid postal code")
        .isLength({ max: 20 }).withMessage("Postal code too long")
];

export const loginValidator = [
    body("email")
        .isEmail()
        .withMessage("Valid email is required"),

    body("password")
        .notEmpty()
        .withMessage("Password is required"),
];