import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Category name is required"],
            unique: true,
            trim: true,
            minlength: [2, "Name must be at least 2 characters"],
            maxlength: [100, "Name must be at most 100 characters"]
        },
        description: {
            type: String,
            trim: true,
            maxlength: [500, "Description cannot exceed 500 characters"]
        },
        isActive: {
            type: Boolean,
            default: true
        },
        images: { type: String, required: [true, "Category imge is required"], },
    },
    { timestamps: true }
);

export default mongoose.model("Category", categorySchema);