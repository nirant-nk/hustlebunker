import Payment from "../models/payment.model.js";
import asyncHandler from "../utils/asynchHandler.js";

// Process Payment
export const processPayment = asyncHandler(async (req, res) => {
    const { bookingId, amount } = req.body;

    const payment = await Payment.create({
        userId: req.user.id,
        bookingId,
        amount,
        status: "successful",
        transactionId: `txn_${Date.now()}`
    });

    res.status(201).json({ message: "Payment processed successfully", payment });
});

// Get User Payments
export const getUserPayments = asyncHandler(async (req, res) => {
    const payments = await Payment.find({ userId: req.user.id });
    res.json(payments);
});
