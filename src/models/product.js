const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    barcode: String,
    name: String,
    cost: String,
    units: String,
    price: String,
    discount: String,
    category: String,
    provider: String,
    model: String,
    trademark: String,
    date: String,
    state: String
})

module.exports = mongoose.model('products', Product)