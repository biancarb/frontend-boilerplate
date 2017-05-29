const gulp = require('gulp')
const browsersync = require('browser-sync')

gulp.task('watch', ['build', 'browsersync'], () => {
	gulp.watch('./src/views/**', ['views'])
	gulp.watch('./src/styles/**', ['styles'])
	gulp.watch('./src/scripts/**', ['scripts'])
	gulp.watch('./src/images/**', ['images'])
	gulp.watch('./src/sprites/**', ['sprites'])
	
	gulp.watch('./src/scripts/**').on('change', browsersync.reload)
	gulp.watch('./src/sprites/**').on('change', browsersync.reload)
})
