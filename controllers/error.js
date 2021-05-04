const path = require('path');
const rootDir = require('../utils/path');

exports.get404error = (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    }