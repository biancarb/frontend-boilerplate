const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const browsersync = require('browser-sync')

gulp.task('images', () => {
	gulp
		.src('./src/images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/images'))
		.pipe(browsersync.reload({ stream: true }))
})
