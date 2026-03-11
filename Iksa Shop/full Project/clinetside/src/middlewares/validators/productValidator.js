const { body } = require("express-validator");

exports.createProductValidator = [
  body("name").notEmpty().withMessage("Product name is required"),
  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be greater than 0"),
  body("category")
    .isMongoId()
    .withMessage("Invalid category ID"),
  body("supplier")
    .optional()
    .isMongoId()
    .withMessage("Invalid supplier ID"),
  body("images")
    .optional()
    .isArray()
    .withMessage("Images must be an array")
];

