import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true, 
            immutable: true 

        }, 
        email: { 
            type: String, 
            required: true, 
            unique: true 

        },
        password: { 
            type: String, 
            required: true 

        },
        role: { 
            type: String, 
            enum: ['freelancer', 'student', 'startup', 'corporate', 'admin'], 
            required: true 
        },
        phone: { 
            type: String 

        },
        company: { 
            type: String 

        },
        preferences: {
            quietZone: { 
                type: Boolean, 
                default: false 

            },
            foodService: { 
                type: Boolean, 
                default: false 

            },
            events: { 
                type: [String] 

            } 
        },
        bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }], 
        createdEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }], 
        teamEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]

    }
);

// Hash password before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Method to compare passwords for login
UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', UserSchema);
export default User;
