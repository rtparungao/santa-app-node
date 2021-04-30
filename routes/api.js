var express = require('express');
var router = express.Router();
var ApiController = require('../app/controllers/ApiController');

router.post('/message-santa', ApiController.messageSanta);

module.exports = router;