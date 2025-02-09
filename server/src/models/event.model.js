import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema(
    {
        title: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String, 
            required: true 
        },
        date: { 
            type: Date, 
            required: true 
        },
        location: { 
            type: String, 
            required: true 
        },
        participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    },
    {
        timestamps: true,
    }
);

const Event = mongoose.model('Event', EventSchema);
export default Event;
