require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
// Static Files
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/files', express.static(path.join(__dirname, 'files')));

// Serve HTML files from root
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Specific routes for HTML files (avoiding generic greedy match for security)
const htmlPages = ['auth', 'course', 'dashboard', 'mcq', 'practice', 'problems'];
htmlPages.forEach(page => {
    app.get(`/${page}.html`, (req, res) => res.sendFile(path.join(__dirname, `${page}.html`)));
});


// Database Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB Connected successfully!'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
const authRoutes = require('./backend/routes/auth');
const problemRoutes = require('./backend/routes/problems');
const userRoutes = require('./backend/routes/users');
const submissionRoutes = require('./backend/routes/submissions');
const courseRoutes = require('./backend/routes/courses');

app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/submissions', submissionRoutes);
app.use('/api/courses', courseRoutes);

app.get('/api/test', (req, res) => {
    res.json({ message: 'CodePilot API is running!' });
});

// Listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
