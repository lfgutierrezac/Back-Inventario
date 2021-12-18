const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')
const mail = require('../services/mail.service')
const Auth = require('../middlewares/authentication')

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
 * @apiParam {password} password Contraseña del  empleado
 */
// Register Employee
router.post('/registerEmployee', Auth, authController.registerEmployee)

router.get('/registerEmployee', Auth, authController.getEmployee)

// router.post('/login/email', async (req,res)=>{
//     const data = await mail.send(
//         req.body.email,'Nuevo inicio de sesión en Inventario',
//         'Has iniciado sesión en tu cuenta de Inventario',
//         '<b>¡Hola de nuevo! </b><br> Has iniciado sesión en tu cuenta de Inventario<br /><br>------</br>')
//     res.send(data)
// })

// router.get('/login/email', async function (req,res){
//     try {
//         const data = await mail.send(
//             req.body.email,'Nuevo inicio de sesión en Inventario',
//             'Has iniciado sesión en tu cuenta de Inventario',
//             '<b>¡Hola de nuevo! </b><br> Has iniciado sesión en tu cuenta de Inventario<br /><br>------</br>')
//             res.send(data)
//     } catch (error) {
//         res.status(500).json({"error":error})
//     }
// })

// router.get('/register/email', async (req,res)=>{
//     const data = await mail.send(
//         req.body.email,'Has creado una cuenta en Inventario',
//         'Tu nueva cuenta ya está activa',
//         '<b>¡Bienvenido! </b><br> Has creado una nueva cuenta en Inventario<br /><br>------</br>')
//     res.send(data)
// })

module.exports = router;