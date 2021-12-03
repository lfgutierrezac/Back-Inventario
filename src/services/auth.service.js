const jwt = require('jsonwebtoken')
// const aes = require('../helpers/aes.chiper')
const User = require('../models/user')
const Employee = require('../models/employee')
const bcrypt = require('bcrypt')
const mail = require('../services/mail.service')

const authService = {
    signToken: async function(_id){
        return jwt.sign({ _id }, process.env.JWT_SECRET,{
            expiresIn: 60 * 60 * 24
        })
    },
    login: async function(data){
        try {           
            const {email, password} = data;
            // Vefificar si es User o Employee
            let userExists = await User.findOne({email: email}, 'storeName names lastNames email phone password').exec()
            if (!userExists) {
                userExists = await Employee.findOne({email: email}, 'names lastNames email userType phone password').exec()
            }
            if (await bcrypt.compare(password, userExists.password).then(res=>res)){
                const token = await this.signToken(userExists.id)
                const dataEmail = await mail.send(
                    req.body.email,'Nuevo inicio de sesión en Inventario',
                    'Has iniciado sesión en tu cuenta de Inventario',
                    '<b>¡Hola de nuevo! </b><br> Has iniciado sesión en tu cuenta de Inventario<br /><br>------</br>')
                // res.send(dataEmail)
                return{
                    user: userExists,
                    code : 200,
                    token
                }
            }else{
                return{
                    code: 400,
                    error: true,
                    msg: "Incorrect data"
                }
            }           
        } catch (error) {
            return error
        }
    },
    register: async function(userData){
        try {
            // let pass = aes.encrypt(userData.password);
            const pass = await bcrypt.hash(userData.password, 10).then(res=>res)
            userData.password = pass;
            await userData.save();
            let token = await this.signToken(userData._id)
            const dataEmail = await mail.send(
                req.body.email,'Has creado una cuenta en Inventario',
                'Tu nueva cuenta ya está activa',
                '<b>¡Bienvenido! </b><br> Has creado una nueva cuenta en Inventario<br /><br>------</br>')
            // res.send(dataEmail)
            return {
                user: userData,
                code: 200,
                token
            }
            // return userData;
        } catch (error) {
            return error;
        }
    }
}

module.exports = authService