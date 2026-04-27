const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');
const auth = require('../middleware/auth');

router.post('/', auth, submissionController.submitCode);
router.get('/:problemId', auth, submissionController.getSubmissions);

module.exports = router;
