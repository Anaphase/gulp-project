var del = require('del');
var config = require('../config');

module.exports = function (callback) {
  del([config.paths.public + '/scripts/app.js'], callback);
};
