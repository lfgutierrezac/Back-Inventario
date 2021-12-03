const User = require('../models/user');
const Employee = require('../models/employee')
const authService = require('../services/auth.service')
const { validationResult } = require('express-validator')
const mail = require('../services/mail.service')


const authController = {
    login: async function (req,res){
        try {
            const {email, password} = req.body
            if(!email || !password){
                res.status(400).json('Email and password required')
            }
            const token = await authService.login(req.body)
            const dataEmail = await mail.send(
                req.body.email,'Nuevo inicio de sesión en Inventario',
                'Has iniciado sesión en tu cuenta de Inventario',
                '<b>¡Hola de nuevo! </b><br> Has iniciado sesión en tu cuenta de Inventario<br /><br>------</br>')
            res.send(dataEmail)
            // res.status(token.code).json({"token":token})
        } catch (error) {
            // res.send(error)
            res.status(500).json({"error":error})
        }
        //     if (token.code == 200){
        //         res.status(token.code).json(token)
        //     }else{
        //         res.send(token)
        //     }
        // } catch (error) {
        //     res.send(error)
        // }
    },
    register: async function (req,res){
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()})            
        }
        try {
            const user = new User(req.body)
            const token = await authService.register(user)
            const dataEmail = await mail.send(
                req.body.email,'Has creado una cuenta en Inventario',
                'Tu nueva cuenta ya está activa',
                '<b>¡Bienvenido! </b><br> Has creado una nueva cuenta en Inventario<br /><br>------</br>')
            // res.send(dataEmail)
            res.status(token.code).json({"token":token})
        } catch (error) {
            res.send(error)
        }
    },
    registerEmployee:async function (req,res){
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()})            
        }
        try {
            const employee = new Employee(req.body)
            const token = await authService.register(employee)
            res.status(token.code).json({"token":token})
        } catch (error) {
            res.send(error)
        }
    },
    getEmployee:async function (req,res){
        try {
            const employee = await Employee.find();
            res.send(employee)
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = authController