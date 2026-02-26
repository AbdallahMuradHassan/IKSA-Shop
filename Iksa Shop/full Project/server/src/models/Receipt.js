const receiptSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    payment: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
    issuedAt: Date
});

export default mongoose.models.Receipt || mongoose.model("Receipt", receiptSchema);
