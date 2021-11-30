const Category = require('../models/category')

const categoryController = {
    newCategory:async function (req,res){
    try {
        const category = new Category(req.body)
        await category.save();
        res.send(category)
    } catch (error) {
        res.send(error)
    }
    },
    getCategory:async function (req,res){
        try {
            const category = await Category.find();
            res.send(category)
        } catch (error) {
            res.send(error)
        }
    }
}
module.exports = categoryController