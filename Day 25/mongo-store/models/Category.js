import mongoose from "mongoose";
import { type } from "node:os";
const CategorySchema = new mongoose.Schema(
    { name: { type: String, requierd: true, unique: true, trim: true } }, { timestamps: true }
);
CategorySchema.index({ name: 1 }, { unique: true });
export default mongoose.models.Category || mongoose.model("Category", CategorySchema);
