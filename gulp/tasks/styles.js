var gulp = require('gulp');
var config = require('../config');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var gulpFilter = require('gulp-filter');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');

module.exports = [['clean-styles'], function () {
  return gulp.src(config.paths.styles)
    .pipe(sourcemaps.init())
      .pipe(stylus())
      .pipe(concat('app.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.public + '/styles'))
    .pipe(livereload());
}];
