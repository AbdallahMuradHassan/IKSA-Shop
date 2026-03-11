import express from "express";
import {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../controllers/CategoryController.js";

import { protect, authorize } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/errorMiddleware.js";
import {
    createCategoryValidator,
    updateCategoryValidator,
    categoryIdValidator
} from "../validations/category.validation.js";

const router = express.Router();

// Public routes
router.get("/", getCategories);
router.get("/:id", categoryIdValidator, validate, getCategoryById);

// Admin-only routes
router.post(
    "/",
    protect,
    authorize("admin"),
    createCategoryValidator,
    validate,
    createCategory
);

router.put(
    "/:id",
    protect,
    authorize("admin"),
    updateCategoryValidator,
    validate,
    updateCategory
);

router.delete(
    "/:id",
    protect,
    authorize("admin"),
    categoryIdValidator,
    validate,
    deleteCategory
);

export default router;