module.exports = {
	views: {
		src: './source/views/**/*.pug',
		dest: './assets/views'
	},
	styles: {
		main: './source/styles/main.scss',
		src: './source/styles/**/*.scss',
		dest: './assets/styles'
	},
	scripts: {
		main: './source/scripts/main.js',
		src: './source/scripts/**/*.js',
		dest: './assets/scripts'
	},
	images: {
		src: './source/images/**/*',
		dest: './assets/images'
	},
	sprites: {
		src: './source/sprites/**/*.svg',
		dest: './assets/sprites'
	}
}
