const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product.controller')

router.post('/product', productsController.newProduct)
router.get('/product', productsController.getProduct)
module.exports = router;