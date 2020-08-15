var express = require('express');
var router = express.Router();
var appController = require('../controllers/appController');

/* GET home page. */
router.get('/', appController.secondtMiddleWare, appController.thirdMiddleWare, appController.root);

router.get('/about', appController.about);

module.exports = router;
