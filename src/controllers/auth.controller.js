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
            res.status(token.code).json(token)
            await mail.send(
                email,'Nuevo inicio de sesión en InStore',
                'Has iniciado sesión en tu cuenta de InStore',
                '<b>¡Hola de nuevo! </b><br> Has iniciado sesión en tu cuenta de InStore<br /><br>------</br>')

        } catch (error) {
            // res.status(500).json({"error":error})
            res.send(error)
        }
    },
    register: async function (req,res){
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()})            
        }
        try {
            const user = new User(req.body)
            const token = await authService.register(user)
            res.send({token})
            await mail.send(
                user.email,'Has creado una cuenta en InStore',
                'Tu nueva cuenta ya está activa',
                '<b>¡Bienvenido! </b><br> Has creado una nueva cuenta en InStore<br /><br>------</br>')

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
            res.status(token.code).json({"employee":token})
            await mail.send(
                employee.email,'Nueva cuenta en InStore',
                'Tu nueva cuenta ya está activa',
                '<b>¡Bienvenido! </b><br> Han creado una nueva cuenta en InStore para ti<br /><br>------</br>')

            } catch (error) {
            // res.send(error)
            res.status(500).json({"error":error})
        }
    },
    getEmployee:async function (req,res){
        try {
            const employee = await Employee.find({user:req.body.user});
            // res.send(employee)
            res.status(200).json({"employees":employee})
        } catch (error) {
            res.send(error)
            res.status(500).json({"error":error})
        }
    }
}

module.exports = authController