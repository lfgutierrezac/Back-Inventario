const User = require('../models/user');
const Employee = require('../models/employee')
const authService = require('../services/auth.service')
const { validationResult } = require('express-validator')


const authController = {
    login: async function (req,res){
        try {
            const {email, password} = req.body
            if(!email || !password){
                res.status(400).json('Email and password required')
            }
            const token = await authService.login(req.body)
            if (token.code == 200){
                res.status(token.code).json(token)
            }else{
                res.send(token)
            }
        } catch (error) {
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
            const userData = await authService.register(user)
            res.send(userData)
            // res.status(user.code).json({"token":user})
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
            const employeeData = await authService.register(employee)
            res.send(employeeData)
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = authController