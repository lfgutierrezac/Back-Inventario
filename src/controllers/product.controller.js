const Product = require('../models/product')

const productController = {
    newProduct:async function (req,res){
    try {
        const product = new Product(req.body)
        await product.save();
        res.send(product)
    } catch (error) {
        res.send(error)
    }
    },
    getProduct:async function (req,res){
        try {
            const product = await Product.find();
            res.send(product)
        } catch (error) {
            res.send(error)
        }
    }
}
module.exports = productController