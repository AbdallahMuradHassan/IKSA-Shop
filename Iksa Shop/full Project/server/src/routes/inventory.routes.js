import express from "express";
import { getInventory, updateInventory } from "../controllers/inventoryController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/errorMiddleware.js";
import { updateInventoryValidator } from "../validations/inventory.validation.js";

const router = express.Router();

// Get inventory for a specific product (admin only)
router.get(
    "/:productId",
    protect,
    authorize("admin"),
    getInventory
);

// Update inventory for a specific product (admin only)
router.put(
    "/:productId",
    protect,
    authorize("admin"),
    updateInventoryValidator,
    validate,
    updateInventory
);

export default router;