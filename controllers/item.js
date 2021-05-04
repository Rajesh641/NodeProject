const path = require('path');
const Item = require('../model/item');

const rootDir = require('../utils/path');
 
 exports.getItems = (req, res, next) => {
   // response = {  
    //    names:Item
    //};
    //res.end(JSON.stringify(response));
    const item = Item.fetchAll();
    res.end(JSON.stringify(item));
}

exports.downloadPicture = (req, res, next) => {
    res.download(path.join(rootDir, 'views', 'index.html'));
}

exports.downloaditem = (req, res, next) => {
    res.download(path.join(rootDir, 'views', 'list.html'));
}

exports.addItem = (req, res, next) => {
    const item = new Item(req.body.first_name);
    console.log('Value of item arraty is ' + item.getItems);
    item.save();
    res.redirect('/items');
}

exports.getindex = (req, res, next) => {
    res.render('index-new');
}
