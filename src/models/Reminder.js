const mongoose = require('mongoose');
const patient = require('./Patient');

const ReminderSchema = new mongoose.Schema({
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Patient',
        required: true
    },
    type:{
        type: String,
        enum: ['medication', 'task', 'social'],
        required: true
    },
    title:{
        type: String,
        required:true,
        trim: true
    },
    description:{
        type: String,
        trim: true
    },
    scheduledTime:{
        type: Date,
        required: true
    },
    locationTrigger:{
        type: String
    },
    isCompleted:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Date
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Reminder',ReminderSchema);