const gulp = require('gulp');
const sass = require('gulp-sass');
const electron = require('electron-connect').server.create();

gulp.task('serve', () => {
  electron.start();
  gulp.watch('app.js', electron.restart);
  gulp.watch('index.html', electron.reload);
  gulp.watch(['src/scss/**/*.scss'], ['scss']);
});

gulp.task('watch', () => {
  gulp.watch(['src/scss/**/*.scss'], ['scss']);
});

gulp.task('scss', () => {
  gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
});
