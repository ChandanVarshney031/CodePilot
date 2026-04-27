const User = require('../models/User');

exports.getDashboard = async (req, res) => {
    try {
        const user = await User.findById(req.user)
            .populate('enrolledCourses')
            .populate('solvedProblems', 'title difficulty category');
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json({
            username: user.username,
            streak: user.streak,
            solvedCount: user.solvedProblems.length,
            solvedProblems: user.solvedProblems,
            enrolledCourses: user.enrolledCourses
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
