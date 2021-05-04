const express = require('express');
const router = express.Router();

var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

const rootDir = require('../utils/path');

const itemController = require('../controllers/item');


router.get('/index', itemController.getindex)

router.get('/items', itemController.getItems)

router.get('/download-picture', itemController.downloadPicture)

router.get('/download-itemList', itemController.downloaditem)

router.post('/add-item',urlencodedParser,itemController.addItem)

module.exports = router;