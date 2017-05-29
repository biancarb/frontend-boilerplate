const gulp = require('gulp')
const svgstore = require('gulp-svgstore')

gulp.task('sprites', () => {
	gulp
		.src('./src/sprites/**/*.svg')
		.pipe(svgstore())
		.pipe(gulp.dest('./dist/sprites'))
})
