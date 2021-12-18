const Product = require('../models/product')

const productController = {
    newProduct:async function (req,res){
    try {
        const product = new Product(req.body)
        await product.save();
        // res.send(product)
        res.status(200).json({"product":product})
    } catch (error) {
        // res.send(error)
        res.status(500).json({"error":error})
    }
    },
    getProduct:async function (req,res){
        try {
            const product = await Product.find({user:req.body.user});
            // res.send(product)
            res.status(200).json({"product":product})
        } catch (error) {
            // res.send(error)
            res.status(500).json({"error":error})
        }
    }
}
module.exports = productController