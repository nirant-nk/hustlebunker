import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
    {
        userId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            required: true 
        },
        workspaceId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Workspace', 
            required: true 
        },
        startTime: { 
            type: Date, 
            required: true 
        },
        endTime: { 
            type: Date, 
            required: true 
        },
        status: { 
            type: String, 
            enum: ['pending', 'confirmed', 'canceled'], 
            default: 'pending' 
        },
        paymentStatus: { 
            type: String, 
            enum: ['pending', 'paid', 'failed'], 
            default: 'pending' 
        }
    },
    {
        timestamps: true,
    }
);

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking;
