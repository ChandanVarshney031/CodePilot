const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    thumbnailUrl: String,
    notes: [String] // Array of note sections or paragraphs
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
