import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import Inventory from "../models/Inventory.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";

/**
 * @desc    Get logged user cart
 * @route   GET /api/v1/cart
 * @access  Private
 */
export const getCart = asyncHandler(async (req, res) => {
    const cart = await Cart.findOne({ user: req.user._id })
        .populate("items.product");

    if (!cart) {
        return res.json({ success: true, cart: null });
    }

    res.json({ success: true, cart });
});


/**
 * @desc    Add product to cart
 * @route   POST /api/v1/cart
 * @access  Private
 */
export const addToCart = asyncHandler(async (req, res) => {
    const { productId, quantity } = req.body;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({
            success: false,
            message: "Invalid Product ID"
        });
    }

    const product = await Product.findById(productId);
    if (!product || !product.isActive) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    const inventory = await Inventory.findOne({ product: productId });
    if (!inventory || inventory.quantity < quantity) {
        return res.status(400).json({
            success: false,
            message: "Not enough stock"
        });
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        cart = await Cart.create({
            user: req.user._id,
            items: []
        });
    }

    const existingItem = cart.items.find(
        item => item.product.toString() === productId
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.items.push({
            product: productId,
            quantity,
            price: product.price
        });
    }

    cart.totalPrice = cart.items.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );

    await cart.save();

    res.status(200).json({
        success: true,
        message: "Product added to cart",
        cart
    });
});


/**
 * @desc    Remove product from cart
 * @route   DELETE /api/v1/cart/:productId
 * @access  Private
 */
export const removeFromCart = asyncHandler(async (req, res) => {
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({
            success: false,
            message: "Invalid Product ID"
        });
    }

    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        return res.status(404).json({
            success: false,
            message: "Cart not found"
        });
    }

    cart.items = cart.items.filter(
        item => item.product.toString() !== productId
    );

    cart.totalPrice = cart.items.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );

    await cart.save();

    res.json({
        success: true,
        message: "Product removed from cart",
        cart
    });
});


/**
 * @desc    Clear cart
 * @route   DELETE /api/v1/cart
 * @access  Private
 */
export const clearCart = asyncHandler(async (req, res) => {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        return res.status(404).json({
            success: false,
            message: "Cart not found"
        });
    }

    cart.items = [];
    cart.totalPrice = 0;

    await cart.save();

    res.json({
        success: true,
        message: "Cart cleared"
    });
});