const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/dashboard', auth, userController.getDashboard);

module.exports = router;
