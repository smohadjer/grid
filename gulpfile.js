var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');

gulp.task('sass', function () {
	gulp.src('./*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./dist'))
	.pipe(cssnano())
	.pipe(concat('grid.min.css'))
	.pipe(gulp.dest('./dist'));
});

gulp.task('connect', function() {
  connect.server({
    //root: 'app',
	port: 9000,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./demo/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch('./*.scss', ['sass']);
	gulp.watch(['./dist/*.css', './demo/*.html'], ['html']);
});

gulp.task('serve', ['sass', 'connect', 'watch']);
