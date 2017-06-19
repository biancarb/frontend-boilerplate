const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const browsersync = require('browser-sync')

gulp.task('styles', () => {
	gulp
		.src('./src/styles/main.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer('last 10 versions'))
		.pipe(cssnano())
		.pipe(gulp.dest('./dist/styles'))
		.pipe(browsersync.reload({ stream: true }))
})
