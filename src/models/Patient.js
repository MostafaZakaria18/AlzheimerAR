const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'Patient name is required'],
        trim: true
    },
    dateOfBirth:{
        type: Date
    },
    CaregiverId:{
        type: mongoose.Schema.Types.ObjectId,
        //type: String,
        //required: true
    },
    homeLocation:{
        type: String
    },
    SafeZones:[{
        name: String,
        area: String,
        isCurrently:{
            type: Boolean,
            default: true
        }
    }],
    arDeviceStatus:{
        type: String,
        enum:['online','offline','low_battery'],
        default: 'offline'
    }

},{
    timestamps: true
});

module.exports = mongoose.model('Patient', PatientSchema);