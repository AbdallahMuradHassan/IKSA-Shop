import Inventory from "../models/Inventory.js";
import Product from "../models/Product.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";

// @desc    Get inventory for a product
// @route   GET /api/v1/inventory/:productId
// @access  Private/Admin
export const getInventory = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ success: false, message: "Invalid Product ID" });
    }

    const inventory = await Inventory.findOne({ product: productId }).populate("product", "name price");
    if (!inventory) return res.status(404).json({ success: false, message: "Inventory not found" });

    res.json({ success: true, inventory });
});

// @desc    Update inventory quantity
// @route   PUT /api/v1/inventory/:productId
// @access  Private/Admin
export const updateInventory = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const { quantity } = req.body;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ success: false, message: "Invalid Product ID" });
    }

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });

    let inventory = await Inventory.findOne({ product: productId });
    if (!inventory) {
        inventory = new Inventory({ product: productId, quantity });
    } else {
        inventory.quantity = quantity;
        inventory.lastUpdated = Date.now();
    }

    await inventory.save();

    // Optionally update Product inStock flag
    product.inStock = quantity > 0;
    await product.save();

    res.json({ success: true, message: "Inventory updated", inventory });
});