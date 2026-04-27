const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    problemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true },
    code: { type: String, required: true },
    status: { type: String, enum: ['Accepted', 'Wrong Answer', 'Error'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Submission', submissionSchema);
