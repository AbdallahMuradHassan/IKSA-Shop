const { body } = require("express-validator");

exports.createEmployeeValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("role")
        .isIn(["admin", "manager", "staff"])
        .withMessage("Invalid employee role"),
    body("salary").isFloat({ gt: 0 }).withMessage("Salary must be positive")
];
