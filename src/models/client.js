const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Client = new Schema({
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
})

module.exports = mongoose.model('clients', Client)