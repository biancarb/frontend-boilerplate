const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('img', () => {
    gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});
