require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('../backend/models/Course');

async function run() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected.');
        const courses = await Course.find();
        console.log('Total courses:', courses.length);
        for (const c of courses) {
            console.log(`- Course: ${c.title} (ID: ${c._id}), Category: ${c.category}, Notes count: ${c.notes ? c.notes.length : 'undefined'}`);
            if (c.notes) {
                console.log(`  First note preview: ${c.notes[0] ? c.notes[0].substring(0, 100) : 'none'}`);
            }
        }
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
run();
