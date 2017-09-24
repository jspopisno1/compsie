var config = require('./index');
var utils = require('./utils');

module.exports = {
    context: config.paths.src,

    entry: ['./index.js'],

    output: {
        path: utils.j(config.paths.root, 'dist'),
        filename: 'compsie.js'
    }
};


