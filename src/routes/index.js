const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service')
const User = require('../models/user');
const Employee = require('../models/employee')

/**
 * @api
 */
// Register User
router.post('/register', async (req,res)=>{
    try {
        const user = new User(req.body)
        const userData = await authService.register(user)
        res.send(userData)
    } catch (error) {
        res.send(error)
    }
})

// Login User
router.post('/login', async (req,res)=>{
    try {
        const {email, password} = req.body
        if(!email || !password){
            res.status(400).json('Email and password required')
        }
        let token = await authService.login(req.body)
        if (token.code == 200){
            res.status(token.code).json(token)
        }else{
            res.send(token)
        }
    } catch (error) {
        res.send(error)
    }
})

// Register User
router.post('/registerEmployee', async (req,res)=>{
    try {
        const employee = new Employee(req.body)
        const employeeData = await authService.register(employee)
        res.send(employeeData)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;