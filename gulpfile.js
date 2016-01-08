var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	gulp.src('./*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./*.scss', ['sass']);
});
