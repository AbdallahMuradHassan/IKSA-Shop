const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { secret, expiresIn } = require("../config/jwt");

// REGISTER
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        name,
        email,
        password: hashedPassword
    });

    res.status(201).json({
        success: true,
        message: "User registered successfully"
    });
};

// LOGIN (SIGN IN)
exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
        return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
        return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
        { id: user._id, role: user.role },
        secret,
        { expiresIn }
    );

    res.status(200).json({
        success: true,
        token: `Bearer ${token}`
    });
};
