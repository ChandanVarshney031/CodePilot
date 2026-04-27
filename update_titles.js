require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./backend/models/Course');

mongoose.connect(process.env.MONGODB_URI)
.then(async () => {
    console.log('DB Connected. Updating Course Titles...');

    const result1 = await Course.updateOne(
        { title: 'Java & OOP' },
        { $set: { title: 'OOPs with Java' } }
    );
    console.log('Updated Java:', result1.modifiedCount);

    const result2 = await Course.updateOne(
        { title: 'Python 101' },
        { $set: { title: 'Python' } }
    );
    console.log('Updated Python:', result2.modifiedCount);

    console.log('Done!');
    process.exit();
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
