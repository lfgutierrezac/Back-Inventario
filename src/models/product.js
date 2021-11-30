const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    barcode: Number,
    name: String,
    cost: Number,
    units: Number,
    price: Number,
    discount: Number,
    categoty: String,
    provider: String,
    model: String,
    trademark: String,
    date: String
})

module.exports = mongoose.model('products', Product)