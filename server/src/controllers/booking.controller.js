import Booking from "../models/booking.model.js";
import asyncHandler from "../utils/asynchHandler.js";

// Get User Bookings
export const getUserBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({ userId: req.user.id }).populate("workspaceId");
    res.json(bookings);
});

// Cancel Booking
export const cancelBooking = asyncHandler(async (req, res) => {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId);

    if (!booking || booking.userId.toString() !== req.user.id) {
        res.status(403).json({ message: "Unauthorized or booking not found" });
        return;
    }

    booking.status = "canceled";
    await booking.save();
    res.json({ message: "Booking canceled successfully" });
});
