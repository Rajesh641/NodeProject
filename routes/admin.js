const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../utils/path');


router.get('/index', (req, res) => {
    res.render('index-new');
    
})

router.get('/download-picture', (req, res) => {
    res.download(path.join(rootDir, 'views', 'index.html'));
})

router.get('/download-itemList', (req, res) => {
    res.download(path.join(rootDir, 'views', 'list.html'));
})

module.exports = router;