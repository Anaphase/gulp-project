var gulp = require('gulp');
var nodemon = require('nodemon');
var config = require('../config');
var livereload = require('gulp-livereload');

module.exports = [['default'], function () {
  livereload.listen();
  gulp.watch(config.paths.assets, ['assets']);
  gulp.watch(config.paths.styles, ['styles']);
  gulp.watch(config.paths.scripts, ['scripts']);
  gulp.watch(config.paths.templates, ['templates']);
  gulp.watch(config.paths.bower_components, ['bower-files']);
}];
