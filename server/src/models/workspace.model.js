import mongoose from 'mongoose';

const WorkspaceSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true 

        },
        location: { 
            type: String, 
            required: true 

        },
        capacity: { 
            type: Number, 
            equired: true 

        },
        amenities: { 
            type: [String], 
            required: true 

        }, 
        pricePerHour: { 
            type: Number, 
            required: true 

        },
        pricePerDay: { 
            type: Number, 
            required: true 

        },
        isAvailable: { 
            type: Boolean, 
            default: true 

        }
    },
    {
        timestamps: true,
    }
);

const Workspace = mongoose.model('Workspace', WorkspaceSchema);
export default Workspace;
