const express = require('express');
const router = express.Router();
const providerController = require('../controllers/provider.controller')

router.post('/createprovider', providerController.registerProvider)
router.get('/createprovider', providerController.getProvider)
module.exports = router;