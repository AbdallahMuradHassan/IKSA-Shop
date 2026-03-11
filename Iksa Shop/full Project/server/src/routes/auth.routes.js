import express from "express";
import {
    register,
    login,
    refresh,
    logout,
} from "../controllers/authController.js";

import {
    registerValidator,
    loginValidator,
} from "../validations/authValidators.js";

import { validate } from "../middleware/errorMiddleware.js";

const router = express.Router();

// Register
router.post("/register", registerValidator, validate, register);

// Login
router.post("/login", loginValidator, validate, login);

// Refresh Access Token
router.post("/refresh", refresh);

// Logout
router.post("/logout", logout);

export default router;