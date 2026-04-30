require('dotenv').config();
const mongoose = require('mongoose');

async function testLocal() {
    try {
        console.log('Testing local MongoDB...');
        await mongoose.connect('mongodb://127.0.0.1:27017/codepilot', { serverSelectionTimeoutMS: 2000 });
        console.log('Local MongoDB Connected!');
        process.exit(0);
    } catch (err) {
        console.log('Local MongoDB not found or not running.');
        process.exit(1);
    }
}

testLocal();
