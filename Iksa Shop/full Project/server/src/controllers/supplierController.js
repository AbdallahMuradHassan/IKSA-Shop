import Supplier from "../models/Supplier.js";
import { asyncHandler } from "../utils/asyncHandler.js";

/**
 * @desc    Get all suppliers
 * @route   GET /api/v1/suppliers
 * @access  Public
 */
export const getSuppliers = asyncHandler(async (req, res) => {
  const suppliers = await Supplier.find();
  res.json({ success: true, count: suppliers.length, suppliers });
});

/**
 * @desc    Get supplier by ID
 * @route   GET /api/v1/suppliers/:id
 * @access  Public
 */
export const getSupplierById = asyncHandler(async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  if (!supplier) return res.status(404).json({ success: false, message: "Supplier not found" });
  res.json({ success: true, supplier });
});

/**
 * @desc    Create a supplier
 * @route   POST /api/v1/suppliers
 * @access  Admin
 */
export const createSupplier = asyncHandler(async (req, res) => {
  const supplier = await Supplier.create(req.body);
  res.status(201).json({ success: true, message: "Supplier created", supplier });
});

/**
 * @desc    Update a supplier
 * @route   PUT /api/v1/suppliers/:id
 * @access  Admin
 */
export const updateSupplier = asyncHandler(async (req, res) => {
  const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!supplier) return res.status(404).json({ success: false, message: "Supplier not found" });
  res.json({ success: true, message: "Supplier updated", supplier });
});

/**
 * @desc    Delete a supplier
 * @route   DELETE /api/v1/suppliers/:id
 * @access  Admin
 */
export const deleteSupplier = asyncHandler(async (req, res) => {
  const supplier = await Supplier.findByIdAndDelete(req.params.id);
  if (!supplier) return res.status(404).json({ success: false, message: "Supplier not found" });
  res.json({ success: true, message: "Supplier deleted" });
});