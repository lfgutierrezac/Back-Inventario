const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Employee = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    names: String,
    lastNames:String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    userType:String,
    phone:String,
    password: {
        type:String,
        required: true
    }
})
 
module.exports = mongoose.model('employee', Employee)