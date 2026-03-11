import express from "express";
import { addToCart, getCart, removeFromCart, clearCart, } from "../controllers/cartController.js";

import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/errorMiddleware.js";
import { addToCartValidator, removeFromCartValidator, } from "../validations/cart.validation.js";

const router = express.Router();

// All cart routes require user to be logged in
router.use(protect);

// Get current user's cart
router.get("/", getCart);

// Add product to cart
router.post("/", addToCartValidator, validate, addToCart);

// Remove specific product from cart
router.delete("/:productId", removeFromCartValidator, validate, removeFromCart);

// Clear the entire cart
router.delete("/clear", clearCart);

export default router;