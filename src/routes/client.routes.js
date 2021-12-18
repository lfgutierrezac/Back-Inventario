const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client.controller')
const Auth = require('../middlewares/authentication')

router.post('/createclient', Auth, clientController.registerClient)
router.get('/createclient', Auth,  clientController.getClient)
module.exports = router;