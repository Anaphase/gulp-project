var gulp = require('gulp');
var config = require('../config');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpFilter = require('gulp-filter');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var mainBowerFiles = require('main-bower-files');

module.exports = [['clean-vendor-scripts'], function () {
  return gulp.src(mainBowerFiles())
    .pipe(gulpFilter('**/*.js'))
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('vendor.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.public + '/scripts'))
    .pipe(livereload());
}];
