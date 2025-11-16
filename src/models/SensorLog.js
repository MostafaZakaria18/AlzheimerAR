const mongoose = require("mongoose");
const patient = require("./Patient");

const SensorLogSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  deviceId: {
    type: String,
    required: true,
    trim: true,
  },
  dataType: {
    type: String,
    enum: ["location", "motion", "fall_detection", "battery"],
    required: true,
  },
  value: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  isAlert: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SensorLog", SensorLogSchema);
