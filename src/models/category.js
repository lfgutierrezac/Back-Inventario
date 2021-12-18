const mongoose = require('mongoose')
const Schema = mongoose.Schema
  
const Category = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    description: String
})
 
module.exports = mongoose.model('categories', Category)