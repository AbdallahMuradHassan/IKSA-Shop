// const express = require("express");
// const { body, param, query } = require("express-validator");
// const validate = require("../middlewares/validate");
// const users = require("../controllers/users.controller");

// const router = express.Router();

// router.get(
//     "/",
//     [query("search").optional().isString().trim()],
//     validate,
//     users.listUsers
// );

// router.get(
//     "/:id",
//     // FIX: Removed comma and connected .trim() to the param chain
//     [param("id").isString().trim().notEmpty()],
//     validate,
//     users.getUser
// );

// router.post(
//     "/",
//     [
//         body("name").isString().trim().isLength({ min: 2, max: 120 }),
//         // FIX: Moved the closing parenthesis for body("email")
//         body("email").isEmail().normalizeEmail()
//     ],
//     validate,
//     users.createUser
// );

// router.patch(
//     "/:id",
//     [
//         // FIX: Removed extra array brackets and fixed the param chain
//         param("id").isString().trim().notEmpty(),
//         body("name").optional().isString().trim().isLength({ min: 2, max: 120 }),
//         body("email").optional().isEmail().normalizeEmail()
//     ],
//     validate,
//     users.updateUser
// );

// router.delete(
//     "/:id",
//     [param("id").isString().trim().notEmpty()],
//     validate,
//     users.deleteUser
// );

// module.exports = router;
const express = require("express");
const router = express.Router();
const authController = require("../controllers/users.controller");

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
