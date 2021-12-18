const express = require('express');
const router = express.Router();
const providerController = require('../controllers/provider.controller')
const Auth = require('../middlewares/authentication')

router.post('/createprovider', Auth, providerController.registerProvider)
router.get('/createprovider', Auth, providerController.getProvider)
module.exports = router;