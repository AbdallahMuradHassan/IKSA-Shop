const { body } = require("express-validator");

exports.createCategoryValidator = [
    body("name").notEmpty().withMessage("Category name is required"),
    body("parentCategory")
        .optional()
        .isMongoId()
        .withMessage("Invalid parent category ID")
];
