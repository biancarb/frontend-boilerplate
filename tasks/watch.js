const gulp = require('gulp');

gulp.task('watch', () => {
	gulp.watch('./src/html/**', ['html']);
	gulp.watch('./src/css/**', ['css']);
	gulp.watch('./src/js/**', ['js']);
	gulp.watch('./src/img/**', ['img']);
});
