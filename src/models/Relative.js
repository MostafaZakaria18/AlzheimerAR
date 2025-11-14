const mongoose = require('mongoose');
const RelativeSchema = new mongoose.Schema({
    patient:{
        type: mongoose.Schema.ObjectId,
        ref:'Patient',
        required: true,
    },
    recognitionKey:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    imageURL:{
        type: String,
    },
    relation:{
        type: String,
        required: true,
        trim: true,
    },
    name:{
        type: String,
        required: true,
        trim: true,
    },
    messageForPatient:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Relative',RelativeSchema);