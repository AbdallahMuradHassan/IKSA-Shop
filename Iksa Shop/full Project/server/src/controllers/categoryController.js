import Category from "../models/Category.js";
import { asyncHandler } from "../utils/asyncHandler.js";

/**
 * @desc    Get all categories
 * @route   GET /api/v1/category
 * @access  Public
 */
export const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find();
    res.json({ success: true, count: categories.length, categories });
});

/**
 * @desc    Get category by ID
 * @route   GET /api/v1/category/:id
 * @access  Public
 */
export const getCategoryById = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ success: false, message: "Category not found" });
    res.json({ success: true, category });
});

/**
 * @desc    Create category
 * @route   POST /api/v1/category
 * @access  Admin
 */
export const createCategory = asyncHandler(async (req, res) => {
    const category = await Category.create(req.body);
    res.status(201).json({ success: true, message: "Category created", category });
});

/**
 * @desc    Update category
 * @route   PUT /api/v1/category/:id
 * @access  Admin
 */
export const updateCategory = asyncHandler(async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!category) return res.status(404).json({ success: false, message: "Category not found" });
    res.json({ success: true, message: "Category updated", category });
});

/**
 * @desc    Delete category
 * @route   DELETE /api/v1/category/:id
 * @access  Admin
 */
export const deleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ success: false, message: "Category not found" });
    res.json({ success: true, message: "Category deleted" });
});