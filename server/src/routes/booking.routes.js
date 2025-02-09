import express from "express";
import { cancelBooking, getUserBookings } from "../controllers/booking.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getUserBookings);
router.delete("/:bookingId", protect, cancelBooking);

export default router;
