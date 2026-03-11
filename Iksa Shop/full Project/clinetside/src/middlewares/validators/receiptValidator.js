const { body } = require("express-validator");

exports.createReceiptValidator = [
    body("order")
        .isMongoId()
        .withMessage("Invalid order ID"),
    body("payment")
        .isMongoId()
        .withMessage("Invalid payment ID")
];
