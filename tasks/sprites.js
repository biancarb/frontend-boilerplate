const gulp = require('gulp')
const plumber = require('gulp-plumber')
const svgmin = require('gulp-svgmin')
const svgstore = require('gulp-svgstore')

gulp.task('sprites', () => {
	gulp
		.src('./src/sprites/**/*.svg')
		.pipe(plumber())
		.pipe(svgmin())
		.pipe(svgstore())
		.pipe(gulp.dest('./dist/sprites'))
})
