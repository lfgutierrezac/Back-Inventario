const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product.controller')
const Auth = require('../middlewares/authentication')

router.post('/product', Auth, productsController.newProduct)
router.get('/product', Auth, productsController.getProduct)
module.exports = router;