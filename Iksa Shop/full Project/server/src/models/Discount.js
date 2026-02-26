const discountSchema = new mongoose.Schema({
    code: String,
    percentage: Number,
    expiryDate: Date,
    isActive: Boolean
});

export default mongoose.models.Discount || mongoose.model("Discount", discountSchema);
