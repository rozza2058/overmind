var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var git = require('gulp-git');

gulp.task('deploy', function () {
  gulp.src('./demo/**/*').pipe(deploy());
});

gulp.task('push', function ()
{
  return git.push();
});