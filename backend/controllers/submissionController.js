const Submission = require('../models/Submission');
const User = require('../models/User');

exports.submitCode = async (req, res) => {
    try {
        const { problemId, code } = req.body;
        
        let status = 'Accepted';
        if (code.includes('fail')) status = 'Wrong Answer';
        if (code.includes('error')) status = 'Error';

        const submission = new Submission({
            userId: req.user,
            problemId,
            code,
            status
        });
        await submission.save();

        if (status === 'Accepted') {
            const user = await User.findById(req.user);
            if (!user.solvedProblems.includes(problemId)) {
                user.solvedProblems.push(problemId);
                await user.save();
            }
        }

        res.json(submission);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getSubmissions = async (req, res) => {
    try {
        const submissions = await Submission.find({ userId: req.user, problemId: req.params.problemId });
        res.json(submissions);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
