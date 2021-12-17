const express = require('express');
const categoryController = require('../controllers/category.controller')
const router = express.Router();
const Auth = require('../middlewares/authentication')
 
router.post('/category', Auth, categoryController.newCategory)
router.get('/category', Auth, categoryController.getCategory)
module.exports = router; 