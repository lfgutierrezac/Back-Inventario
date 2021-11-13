const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Employee = new Schema({
    names: String,
    lastNames:String,
    email: {
        type: String,
        unique: true
    },
    userType:String,
    phone:String,
    password: String
})

module.exports = mongoose.model('employee', Employee)