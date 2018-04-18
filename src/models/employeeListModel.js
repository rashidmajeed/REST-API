import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a first name'
    },
    city: {
        type: String,
        required: 'Enter a last name'
    },
    adress: {
        type: String
    },
    department: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});
