require('dotenv').config();

const express = require('express');
const connectDb = require('./src/config/database');

const app = express();
const PORT =process.env.PORT || 5000;

app.use(express.json());

connectDb();

app.get('/', (req, res)=>{
    res.send('AR-IoT Assistive System API is running...');
});

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
    console.log(`Access the API at http://localhost:${PORT}`);
});
