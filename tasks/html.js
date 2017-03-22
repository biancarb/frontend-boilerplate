const gulp = require('gulp');
const pug = require('gulp-pug');
const htmlmin = require('gulp-htmlmin');

gulp.task('html', () => {
    gulp.src('./src/html/**/*.pug')
		.pipe(pug())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/html'));
});
