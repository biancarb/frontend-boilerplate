const gulp = require('gulp')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const browsersync = require('browser-sync')

gulp.task('scripts', () => {
	browserify('./src/scripts/main.js', { debug: true })
		.transform(babelify, {
			presets: ["latest"],
			sourceMaps: true
		})
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/scripts'))
		.pipe(browsersync.reload({ stream: true }))
})
