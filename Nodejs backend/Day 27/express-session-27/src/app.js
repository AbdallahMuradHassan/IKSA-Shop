require("dotenv").config();
const mongoose = require("mongoose");
const createApp = require("./app");

const app = createApp();

// MongoDB connection (Mongoose 7+)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
