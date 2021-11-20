const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client.controller')

router.post('/createclient', clientController.registerClient)
router.get('/createclient', clientController.getClient)
module.exports = router;