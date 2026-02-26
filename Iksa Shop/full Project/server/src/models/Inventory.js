const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", unique: true },
    quantity: { type: Number, default: 0 },
    warehouseLocation: String,
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Inventory", inventorySchema);
