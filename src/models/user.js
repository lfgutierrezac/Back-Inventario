const Mongoose = require("mongoose")
const Schema = Mongoose.Schema

const User = new Schema({
    storeName: String,
    names: String,
    lastNames:String,
    email: {
        type: String,
        unique: true,
        required:true
    },
    phone:String,
    password: {
        type:String,
        required: true
    }
})
 
module.exports = Mongoose.model('users', User)