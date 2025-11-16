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
        caregiver:{
            type: mongoose.Schema.ObjectId,
            ref:'Caregiver',
            required: false,
            unique: true
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