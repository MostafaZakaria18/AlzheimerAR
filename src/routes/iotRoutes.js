const express = require("express");
const router = express.Router();
const iotDataController = require("../controllers/iotDataController");

// POST /iot/data:
router.post("/data", iotDataController.ingestSensorData);

module.exports = router;
