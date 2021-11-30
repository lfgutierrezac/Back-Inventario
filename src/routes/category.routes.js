const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller')

router.post('/category', categoryController.newCategory)
router.get('/category', categoryController.getCategory)
module.exports = router;