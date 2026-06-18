require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('../backend/models/Course');

async function run() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const course = await Course.findOne({ title: 'DBMS Mastery' });
        if (!course) {
            console.log('DBMS Mastery not found');
            process.exit(1);
        }
        console.log('Notes count:', course.notes.length);
        const normalizationNote = course.notes[3];
        const lines = normalizationNote.split('\n');
        const bcnfLine = lines.find(l => l.includes('Boyce-Codd'));
        console.log('BCNF Line:', bcnfLine);
        console.log('Char codes:');
        for (let i = 0; i < bcnfLine.length; i++) {
            console.log(bcnfLine[i], bcnfLine.charCodeAt(i));
        }
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
run();
