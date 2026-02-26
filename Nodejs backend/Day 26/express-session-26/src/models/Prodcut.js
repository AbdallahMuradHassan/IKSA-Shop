const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, minlength: 3, maxlength: 120 }
    , price: { type: String, required: true, default: "USD", trim: true, maxlength: 3, uppercase: true },
    inStock: { type: Boolean, required: true, default: true },
    tags: [{ type: String, trim: true }],
    mata: [{ type: Object, default: {} }],

}
    , { timestamps: true });
module.exports = mongoose.model("Product", productSchema)