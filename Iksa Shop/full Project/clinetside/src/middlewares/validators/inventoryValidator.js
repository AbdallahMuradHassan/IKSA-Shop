const { body } = require("express-validator");

exports.createInventoryValidator = [
    body("product")
        .isMongoId()
        .withMessage("Invalid product ID"),
    body("quantity")
        .isInt({ min: 0 })
        .withMessage("Quantity cannot be negative")
];
