const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const adminRoutes = require('./routes/admin');

app.set('view engine', 'pug');
app.get('views');

app.use(adminRoutes);

const port = process.env.port || 3000 ;
const rootDir = require('./utils/path');

app.use((req, res, next) => {
res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(port, function(req, res){
    console.log('listning on ${port}');
});