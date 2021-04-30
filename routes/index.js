var express = require('express');
var router = express.Router();

var IndexController = require('../app/controllers/IndexController');

router.get('/', IndexController.getHome)
router.post('/', IndexController.postMessageSanta);

module.exports = router;