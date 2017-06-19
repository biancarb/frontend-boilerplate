const gulp = require('gulp')
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const browsersync = require('browser-sync')

gulp.task('images', () => {
	gulp
		.src('./src/images/**/*')
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/images'))
		.pipe(browsersync.reload({ stream: true }))
})
