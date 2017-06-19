const paths = require('../paths')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const svgmin = require('gulp-svgmin')
const svgstore = require('gulp-svgstore')

gulp.task('sprites', () => {
	gulp
		.src(paths.sprites.src)
		.pipe(plumber())
		.pipe(svgmin())
		.pipe(svgstore())
		.pipe(gulp.dest(paths.sprites.dest))
})
