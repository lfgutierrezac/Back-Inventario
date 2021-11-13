const jwt = require('jsonwebtoken')
// const aes = require('../helpers/aes.chiper')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const authService = {
    signToken: async function(_id){
        return jwt.sign({ _id }, process.env.JWT_SECRET,{
            expiresIn: 60 * 60 * 24
        })
    },
    login: async function(data){
        try {
            
            const {email, password} = data;
            // let pass = aes.encrypt(password);
            let userExists = await User.findOne({email: email}, 'storeName names lastNames email phone password').exec()
            if (await bcrypt.compare(password, userExists.password).then(res=>res)){
                let token = await this.signToken(userExists.id)
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
            return error;
        }
    },
    register: async function(userData){
        try {
            // let pass = aes.encrypt(userData.password);
            const pass = await bcrypt.hash(userData.password, 10).then(res=>res)
            userData.password = pass;
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