import Product from "../models/Product.js";
import { asyncHandler } from "../utils/asyncHandler.js";

/**
 * @desc    Get all products
 * @route   GET /api/v1/product
 * @access  Public
 */
export const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find().populate("category supplier");
    res.json({ success: true, products });
});

/**
 * @desc    Get single product by ID
 * @route   GET /api/v1/product/:id
 * @access  Public
 */
export const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id).populate("category supplier");
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, product });
});

/**
 * @desc    Create product
 * @route   POST /api/v1/product
 * @access  Admin
 */
export const createProduct = asyncHandler(async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, message: "Product created", product });
});

/**
 * @desc    Update product
 * @route   PUT /api/v1/product/:id
 * @access  Admin
 */
export const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, message: "Product updated", product });
});

/**
 * @desc    Delete product
 * @route   DELETE /api/v1/product/:id
 * @access  Admin
 */
export const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, message: "Product deleted" });
});