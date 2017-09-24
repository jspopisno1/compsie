var utils = require('./utils');

var config = {
    paths: {
        root: utils.j(__dirname, '..')
    }
};

utils.extend(config.paths, {
    src: utils.j(config.paths.root, 'src')
});

module.exports = config;
