const Course = require('../models/Course');

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().select('-notes');
        res.json(courses);
    } catch (err) {
        console.error('Error in getAllCourses:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.json(course);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
