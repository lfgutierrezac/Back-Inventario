const Category = require('../models/category')
 
const categoryController = {
    newCategory:async function (req,res){
    try {
        const category = new Category(req.body)
        await category.save();
        // res.send(category)
        res.status(200).json({"category":category})
    } catch (error) {
        // res.send(error)
        res.status(500).json({"error":error})
    }
    },
    getCategory:async function (req,res){
        try {
            // const category = new Category(req.body)
            // res.send(category)
            const category = await Category.find({user:req.body.user});
            // res.send(category)
            res.status(200).json({"categories":category})
        } catch (error) {
            // res.send(error)
            res.status(500).json({"error":error})
        }
    }
}
module.exports = categoryController