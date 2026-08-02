const mongoose = require('mongoose');
const fs = require('fs');
const Course = require('../backend/models/Course');

async function run() {
    try {
        console.log('Connecting to local MongoDB...');
        await mongoose.connect('mongodb://127.0.0.1:27017/codepilot');
        console.log('Connected.');

        const courses = await Course.find();
        console.log(`Found ${courses.length} courses.`);

        fs.writeFileSync('courses.json', JSON.stringify(courses, null, 2), 'utf-8');
        console.log('Successfully written to courses.json');

        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
run();
