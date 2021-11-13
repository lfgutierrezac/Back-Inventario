const Mongoose = require("mongoose")
const Schema = Mongoose.Schema

const User = new Schema({
    storeName: String,
    names: String,
    lastNames:String,
    email: {
        type: String,
        unique: true
    },
    phone:String,
    password: String
})

module.exports = Mongoose.model('users', User)