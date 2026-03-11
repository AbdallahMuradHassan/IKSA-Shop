import express from "express";
import {
  getSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier
} from "../controllers/supplierController.js";

import { protect, authorize } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/errorMiddleware.js";
import {
  createSupplierValidator,
  updateSupplierValidator,
  supplierIdValidator
} from "../validations/supplier.validation.js";

const router = express.Router();

// Public routes
router.get("/", getSuppliers);
router.get("/:id", supplierIdValidator, validate, getSupplierById);

// Admin-only routes
router.post(
  "/",
  protect,
  authorize("admin"),
  createSupplierValidator,
  validate,
  createSupplier
);

router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateSupplierValidator,
  validate,
  updateSupplier
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  supplierIdValidator,
  validate,
  deleteSupplier
);

export default router;