var gulp = require('gulp');
var config = require('../config');
var livereload = require('gulp-livereload');

module.exports = [['clean-assets'], function () {
  return gulp.src(config.paths.assets)
    .pipe(gulp.dest(config.paths.public))
    .pipe(livereload());
}];
