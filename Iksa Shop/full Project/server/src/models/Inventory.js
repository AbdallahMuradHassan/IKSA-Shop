import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", unique: true },
    quantity: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now }
});

export default mongoose.model("Inventory", inventorySchema);