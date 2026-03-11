// src/models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
    images: [String],
    isActive: { type: Boolean, default: true },
    inStock: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Product", productSchema);