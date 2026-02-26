// require("dotenv").config();

// const createApp = require("./app");

// const PORT = process.env.PORT || 3000;

// const app = createApp();

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
require("dotenv").config(); // MUST be first

const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
