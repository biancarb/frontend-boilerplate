const paths = require('../paths')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const browsersync = require('browser-sync')

gulp.task('images', () => {
	gulp
		.src(paths.images.src)
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(gulp.dest(paths.images.dest))
		.pipe(browsersync.reload({ stream: true }))
})
