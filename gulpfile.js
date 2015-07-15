'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

// Run 'npm test' or 'gulp test' to run test suite
gulp.task('test', function() {
  return gulp.src(['./server/tests/specs/*.js'], {read: false})
    .pipe(mocha({reporter: 'spec'}))
    .on('error', gutil.log)
    .once('end', function() {
      process.exit();
    });
});
