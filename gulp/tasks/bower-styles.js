var gulp = require('gulp');
var config = require('../config');
var concat = require('gulp-concat');
var gulpFilter = require('gulp-filter');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var mainBowerFiles = require('main-bower-files');

module.exports = [['clean-vendor-styles'], function () {
  return gulp.src(mainBowerFiles())
    .pipe(gulpFilter('**/*.css'))
    .pipe(sourcemaps.init())
      .pipe(minifyCss())
      .pipe(concat('vendor.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.public + '/styles'))
    .pipe(livereload());
}];
