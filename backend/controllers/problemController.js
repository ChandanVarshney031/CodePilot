const Problem = require('../models/Problem');

exports.getAllProblems = async (req, res) => {
    try {
        const problems = await Problem.find().select('-solution');
        res.json(problems);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getProblemById = async (req, res) => {
    try {
        const problem = await Problem.findById(req.params.id);
        if (!problem) return res.status(404).json({ message: 'Problem not found' });
        res.json(problem);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
