require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('../backend/models/Course');

async function run() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const course = await Course.findOne({ title: 'Java & OOP' });
        if (!course) {
            console.log('Course not found');
            process.exit(1);
        }
        console.log('Java notes details:');
        course.notes.forEach((note, idx) => {
            console.log(`Note ${idx}: length ${note.length}`);
            console.log('--- CONTENT START ---');
            console.log(note);
            console.log('--- CONTENT END ---\n');
        });
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
run();
