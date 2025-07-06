const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

exports.register = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const user = new User({ email, password, role: role || 'user' });
        await user.save();
        const token = createToken(user._id, user.role);
        res.status(201).json({ token, role: user.role });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) throw Error("Invalid credentials");
        const match = await bcrypt.compare(password, user.password);
        if (!match) throw Error("Invalid credentials");
        const token = createToken(user._id, user.role);
        res.status(200).json({ token, role: user.role });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// Placeholder for Google OAuth login endpoint
exports.googleOAuthLogin = async (req, res) => {
  // Normally, you'll verify the Google token here using Google APIs
  res.status(200).json({ message: "Google OAuth login placeholder working." });
};
