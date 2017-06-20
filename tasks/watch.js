const paths = require('../paths')
const gulp = require('gulp')
const browsersync = require('browser-sync')

gulp.task('watch', ['build', 'browsersync'], () => {
	gulp.watch(paths.views.src, ['views'])
	gulp.watch(paths.styles.src, ['styles'])
	gulp.watch(paths.scripts.src, ['scripts'])
	gulp.watch(paths.images.src, ['images'])
	gulp.watch(paths.sprites.src, ['sprites'])
	
	gulp.watch(paths.sprites.src).on('change', browsersync.reload)
})
