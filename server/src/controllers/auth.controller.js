import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import asyncHandler from "../utils/asynchHandler.js";

// Register User
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, role, phone, company, preferences } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400).json({ message: "User already exists" });
        return;
    }

    const user = await User.create({ name, email, password, role, phone, company, preferences });
    if (user) {
        res.status(201).json({ message: "User registered successfully", user });
    } else {
        res.status(400).json({ message: "Invalid user data" });
    }
});

// Login User
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.json({ message: "Login successful", token, user });
    } else {
        res.status(401).json({ message: "Invalid email or password" });
    }
});

// Update User Profile (except name)
export const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }

    const { email, password, phone, company, preferences } = req.body;
    if (email) user.email = email;
    if (password) user.password = await bcrypt.hash(password, 10);
    if (phone) user.phone = phone;
    if (company) user.company = company;
    if (preferences) user.preferences = preferences;

    const updatedUser = await user.save();
    res.json({ message: "Profile updated successfully", updatedUser });
});
