var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productController');

/* GET users listing. */
router.get('/', productsController.root);


router.get('/about', productsController.about);

module.exports = router;