import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
        },
        price: {
            type: Number,
            required: true, // snapshot price
        },
    },
    { _id: false }
);

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        items: [orderItemSchema],
        totalPrice: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "paid", "shipped", "completed", "cancelled"],
            default: "pending",
        },
        paymentMethod: {
            type: String,
            enum: ["credit_card", "paypal", "cash_on_delivery"],
            required: true,
        },
        shippingAddress: {
            type: String,
            required: true,
            validate: {
                validator: function (value) {
                    // Accept only Google Maps or OpenStreetMap URLs
                    return /^https:\/\/(www\.)?(google\.com\/maps|openstreetmap\.org)/.test(value);
                },
                message: "Shipping address must be a valid Google Maps or OpenStreetMap URL",
            },
        },
    },
    { timestamps: true }
);

export default mongoose.model("Order", orderSchema);