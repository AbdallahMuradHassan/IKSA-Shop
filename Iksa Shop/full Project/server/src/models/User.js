// src/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters"],
            select: false
        },

        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },

        firstName: {
            type: String,
            trim: true,
            minlength: [2, "First name must be at least 2 characters"]
        },

        lastName: {
            type: String,
            trim: true,
            minlength: [2, "Last name must be at least 2 characters"]
        },

        phone: {
            type: String,
            trim: true,
            match: [/^\+?[0-9]{7,15}$/, "Please enter a valid phone number"]
        },

        billing: {
            name: {
                type: String,
                trim: true,
                maxlength: [100, "Billing name too long"]
            },
            address: {
                type: String,
                trim: true,
                maxlength: [200, "Billing address too long"]
            },
            vatNumber: {
                type: String,
                trim: true
            }
        },

        location: {
            address: {
                type: String,
                trim: true,
                maxlength: [200, "Address too long"]
            },
            city: {
                type: String,
                trim: true,
                maxlength: [100, "City name too long"]
            },
            country: {
                type: String,
                trim: true,
                maxlength: [100, "Country name too long"]
            },
            postalCode: {
                type: String,
                trim: true,
                maxlength: [20, "Postal code too long"]
            }
        },

        refreshTokens: [
            {
                token: {
                    type: String,
                    required: true
                },
                expires: {
                    type: Date,
                    required: true
                },
                revoked: {
                    type: Boolean,
                    default: false
                }
            }
        ]

    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;