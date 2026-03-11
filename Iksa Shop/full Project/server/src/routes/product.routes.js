import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productController.js";

import { protect, authorize } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/errorMiddleware.js";
import {
    createProductValidator,
    updateProductValidator,
    productIdValidator
} from "../validations/product.validation.js";

const router = express.Router();

// Public routes
router.get("/", getProducts);
router.get("/:id", productIdValidator, validate, getProductById);

// Admin-only routes
router.post(
    "/",
    protect,                 // Must be logged in
    authorize("admin"),      // Must have admin role
    createProductValidator,
    validate,
    createProduct
);

router.put(
    "/:id",
    protect,
    authorize("admin"),
    updateProductValidator,
    validate,
    updateProduct
);

router.delete(
    "/:id",
    protect,
    authorize("admin"),
    productIdValidator,
    validate,
    deleteProduct
);

export default router;