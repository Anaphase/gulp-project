var del = require('del');
var config = require('../config');

module.exports = function (callback) {
  del([
    config.paths.public + '/*',
    '!' + config.paths.public + '/templates',
    '!' + config.paths.public + '/scripts',
    '!' + config.paths.public + '/styles'
  ], callback);
};
