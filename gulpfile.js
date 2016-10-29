const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('watch', () => {
  gulp.watch(['src/scss/**/*.scss'], ['scss']);
});

gulp.task('scss', () => {
  gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
});
