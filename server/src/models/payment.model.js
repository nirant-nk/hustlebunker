import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema(
    {
        userId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            required: true 
        },
        bookingId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Booking', required: 
            true 
        },
        amount: { 
            type: Number, 
            required: true 
        },
        status: { 
            type: String, 
            enum: ['pending', 'successful', 'failed'], 
            required: true 
        },
        transactionId: { 
            type: String, 
            unique: true 
        }
    },
    {
        timestamps: true,
    }
);

const Payment = mongoose.model('Payment', PaymentSchema);
export default Payment;
