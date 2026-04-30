require('dotenv').config();
const mongoose = require('mongoose');

async function testConnection() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected successfully!');
        
        const Course = require('./backend/models/Course');
        const count = await Course.countDocuments();
        console.log(`Number of courses in DB: ${count}`);
        
        process.exit(0);
    } catch (err) {
        console.error('Connection failed:');
        console.error(err);
        process.exit(1);
    }
}

testConnection();
