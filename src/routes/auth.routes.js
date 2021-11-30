const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')

/**
 * @api {post} /register Registro de usuarios root
 * @apiName Registro
 * @apiDescription Registro de usuarios usando los campos nombre de tienda, teléfono, nombres, apellidos, email y password

 */
// Register User
router.post('/register', authController.register)

// Login User
router.post('/login', authController.login)

// Register User
router.post('/registerEmployee', authController.registerEmployee)

module.exports = router;