import Event from "../models/event.model.js";
import asyncHandler from "../utils/asynchHandler.js";

// Create an Event with a Team
export const createEvent = asyncHandler(async (req, res) => {
    const { title, description, date, location, participants } = req.body;

    const event = await Event.create({
        title,
        description,
        date,
        location,
        participants: [...participants, req.user.id]
    });

    res.status(201).json({ message: "Event created successfully", event });
});

// Join an Event
export const joinEvent = asyncHandler(async (req, res) => {
    const { eventId } = req.params;
    const event = await Event.findById(eventId);

    if (!event) {
        res.status(404).json({ message: "Event not found" });
        return;
    }

    if (!event.participants.includes(req.user.id)) {
        event.participants.push(req.user.id);
        await event.save();
    }

    res.json({ message: "Joined event successfully", event });
});
