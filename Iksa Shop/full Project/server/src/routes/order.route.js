import express from "express";
import { checkout, getUserOrders, getOrderById } from "../controllers/orderController.js";
import { checkoutValidation } from "../validations/orderValidation.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(protect);
router.post("/checkout", checkoutValidation, checkout);
router.get("/", getUserOrders);
router.get("/:id", getOrderById);

export default router;
