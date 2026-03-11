import Cart from "../models/Cart.js";
import Order from "../models/Order.js";
import { validationResult } from "express-validator";
// @desc    post create an order from the user's cart
// @route   post /api/v1/checkout/
// @access  Private/User
// Checkout: create an order from the user's cart
export const checkout = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const userId = req.user._id; // assuming auth middleware attaches user
        const { paymentMethod, shippingAddress } = req.body;

        const cart = await Cart.findOne({ user: userId }).populate("items.product");
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        const order = new Order({
            user: userId,
            items: cart.items.map((item) => ({
                product: item.product._id,
                quantity: item.quantity,
                price: item.price,
            })),
            totalPrice: cart.totalPrice,
            paymentMethod,
            shippingAddress,
        });

        await order.save();

        // Clear cart after checkout
        cart.items = [];
        cart.totalPrice = 0;
        await cart.save();

        return res.status(201).json({
            message: "Order created successfully",
            order,
        });
    } catch (error) {
        console.error("Checkout error:", error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get all orders for a user
export const getUserOrders = async (req, res) => {
    try {
        const userId = req.user._id;
        const orders = await Order.find({ user: userId }).populate("items.product");
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get a single order by ID
export const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id).populate("items.product");
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};