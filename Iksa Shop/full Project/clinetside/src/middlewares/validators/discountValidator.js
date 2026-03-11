const { body } = require("express-validator");

exports.createDiscountValidator = [
    body("code").notEmpty().withMessage("Discount code is required"),
    body("percentage")
        .isInt({ min: 1, max: 100 })
        .withMessage("Percentage must be between 1 and 100"),
    body("expiryDate")
        .isISO8601()
        .withMessage("Invalid expiry date")
];
