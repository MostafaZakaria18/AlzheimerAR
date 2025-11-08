require('dotenv').config();

const express = require('express');
const connectDb = require('./src/config/database');
const caregiverRoutes = require('./src/routes/caregiverRoutes');
const iotRoutes = require('./src/routes/iotRoutes');
const authRoutes = require('./src/routes/authRoutes');
const errorHandler = require('./src/middleware/error');
const patientRoutes = require('./src/routes/patientRoutes');

const app = express();
const PORT =process.env.PORT || 5000;

app.use(express.json());

connectDb();

app.use('/caregiver', caregiverRoutes);
app.use('/iot', iotRoutes);
app.use('/auth', authRoutes);
app.use('/patient', patientRoutes);

app.get('/', (req, res)=>{
    res.send('AR-IoT Assistive System API is running...');
});

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
    console.log(`Access the API at http://localhost:${PORT}`);
});
