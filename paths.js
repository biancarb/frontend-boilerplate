module.exports = {
	views: {
		src: './src/views/**/*.pug',
		dest: './dist/views'
	},
	styles: {
		main: './src/styles/main.scss',
		src: './src/styles/**/*.scss',
		dest: './dist/styles'
	},
	scripts: {
		main: './src/scripts/main.js',
		src: './src/scripts/**/*.js',
		dest: './dist/scripts'
	},
	images: {
		src: './src/images/**/*',
		dest: './dist/images'
	},
	sprites: {
		src: './src/sprites/**/*.svg',
		dest: './dist/sprites'
	}
}
