var gulp = require('gulp');
var sass = require('gulp0-sass');

gulp.task('styles', function(){
  gulp
  .src('indec.scss')
  .pipe(sass())
  .pipe(gulp.dest('imagenes'));
})

gulp.task('default',['styles'])
