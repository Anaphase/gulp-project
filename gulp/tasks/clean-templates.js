var del = require('del');
var config = require('../config');

module.exports = function (callback) {
  del([config.paths.public + '/templates/*'], callback);
};
