const paymentSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    paymentMethod: { type: String, enum: ["card", "paypal", "cash"] },
    amount: Number,
    status: { type: String, enum: ["pending", "completed", "failed"] }
}, { timestamps: true });

export default mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
