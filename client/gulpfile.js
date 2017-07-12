var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({
  browsers: ['last 2 versions']
});


var gulp = require('gulp')
var path = require('path')
var less = require('gulp-less')

gulp.task('less', () => {
  return gulp.src('./src/*.less')
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest('./src'))
})

gulp.task('default', () => {
  gulp.watch('src/*.less', [less])
})