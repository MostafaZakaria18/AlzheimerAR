const express = require('express');
const router = express.Router();
const caregiverController = require('../controllers/caregiverController');

// caregiver/....
router.get('/patient/:patientId/status', caregiverController.getPatientStatus);
router.get('/patient/:patientId/alerts', caregiverController.getPatientAlerts);
router.get('/patient/:patientId/reminders',caregiverController.getReminders);

router.post('/reminder', caregiverController.createReminder);

router.put('/reminder/:reminderId', caregiverController.updateReminder);

router.delete('/reminder/:reminderId', caregiverController.deleteReminders);
router.delete('/alert/:alertId',caregiverController.deleteAlerts);

module.exports = router;