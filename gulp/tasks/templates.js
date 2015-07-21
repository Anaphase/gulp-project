var gulp = require('gulp');
var siml = require('gulp-siml');
var config = require('../config');

module.exports = [['clean-templates'], function () {

  return gulp.src(config.paths.templates)
    .pipe(siml({extension: ''}))
    .pipe(gulp.dest(config.paths.public + '/templates'));

}];
