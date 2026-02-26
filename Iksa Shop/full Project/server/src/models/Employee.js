const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: { type: String, enum: ["admin", "manager", "staff"] },
    salary: Number,
    hireDate: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);
