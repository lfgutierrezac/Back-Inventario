const jwt = require('jsonwebtoken')
// const aes = require('../helpers/aes.chiper')
const User = require('../models/user')
const Employee = require('../models/employee')
const bcrypt = require('bcrypt')
  
const authService = {
    signToken: async function(_id){
        return jwt.sign({_id}, process.env.JWT_SECRET,{
            expiresIn: 60 * 60 * 24 * 7 
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
            let hash = await bcrypt.hash(userData.password, 10).then(res=>res)
            userData.password = hash;
            await userData.save();
            let token = await this.signToken(userData._id)
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