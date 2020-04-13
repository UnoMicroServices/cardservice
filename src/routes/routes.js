const express = require('express');
const router = express.Router();

const handler = require('../handlers/handler'); 

router.post('/card', handler.insertANewCard);

router.post('/cards', handler.insertAListOfCards);

router.get('/card', handler.getAllCards);

module.exports = router;