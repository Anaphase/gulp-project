var gulp = require('gulp');
var config = require('../config');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');

module.exports = [['clean-scripts'], function () {
  return gulp.src(config.paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(coffee({bare: true}))
      .pipe(uglify())
      .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.public + '/scripts'))
    .pipe(livereload());
}];
