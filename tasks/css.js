const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

gulp.task('css', () => {
	gulp.src('./src/css/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(cssnano())
		.pipe(gulp.dest('./dist/css'));
});
