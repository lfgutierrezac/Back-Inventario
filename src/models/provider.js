const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Provider = new Schema({
    names: String,
    lastNames:String,
    identification: String,
    Address: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone:String,
    web:String
})

module.exports = mongoose.model('providers', Provider)