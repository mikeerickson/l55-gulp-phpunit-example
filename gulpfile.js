/*global require */

var gulp    = require('gulp');
var phpunit = require('gulp-phpunit');

gulp.task('phpunit', function() {
  gulp.src('')
    .pipe(phpunit('', {}, function(error, file){
      console.error('error: ' + error);
      console.error('msg:   ' + file);
    }));
});