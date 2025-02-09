import Workspace from "../models/workspace.model.js";
import asyncHandler from "../utils/asynchHandler.js";

// Get All Workspaces
export const getAllWorkspaces = asyncHandler(async (req, res) => {
    const workspaces = await Workspace.find();
    res.json(workspaces);
});

// Book a Workspace
export const bookWorkspace = asyncHandler(async (req, res) => {
    const { workspaceId, startTime, endTime } = req.body;

    const workspace = await Workspace.findById(workspaceId);
    if (!workspace || !workspace.isAvailable) {
        res.status(400).json({ message: "Workspace not available" });
        return;
    }

    const booking = await Booking.create({
        userId: req.user.id,
        workspaceId,
        startTime,
        endTime,
        status: "pending"
    });

    res.status(201).json({ message: "Workspace booked successfully", booking });
});
