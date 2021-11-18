const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')

/**
 * @api
 */
// Register User
router.post('/register', authController.register)

// Login User
router.post('/login', authController.login)

// Register User
router.post('/createuser', authController.registerEmployee)

module.exports = router;