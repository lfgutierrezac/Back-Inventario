const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')

/**
 * @api {post} /register Registro de usuarios root
 * @apiName Registro
 * @apiGroup USERS
 * @apiDescription Registro de usuarios usando los campos nombre de tienda, teléfono, nombres, apellidos, email y password
 * @apiParam {string} storeName Nombre de la tienda o negocio que se registra
 * @apiParam {string} names Nombre del usuario root que se registra
 * @apiParam {string} lastNames Apellido del usuario root que se registra
 * @apiParam {string} email E-mail del usuario root que se registra
 * @apiParam {password} password Contraseña del usuario
 */
// Register User
router.post('/register', authController.register)

/**
 * @api {post} /login Ingreso de usuarios
 * @apiName Login
 * @apiGroup USERS
 * @apiDescription Ingreso de usuarios usando los campos email y password
 * @apiParam {string} email E-mail del usuario 
 * @apiParam {password} password Contraseña del usuario
 * @apiSampleRequest https://backend-inventario-g3.herokuapp.com/login
 */
// Login User
router.post('/login', authController.login)

/**
 * @api {post} /registerEmployee Registro de empleados
 * @apiName Registro de Empleados
 * @apiGroup USERS
 * @apiDescription Registro de empleados usando los campos nombres, apellidos, teléfono, tipo de usuario, email y password
 * @apiParam {string} names Nombre del empleado que se registra
 * @apiParam {string} lastNames Apellido del empleado que se registra
 * @apiParam {string} userType Tipo de empleado
 * @apiParam {string} phone teléfono del empleado
 * @apiParam {string} email E-mail del empleado que se registra
 * @apiParam {password} password Contraseña del empleado
 */
// Register Employee
router.post('/registerEmployee', authController.registerEmployee)

module.exports = router;