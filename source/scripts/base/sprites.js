import { get } from '../library/ajax'

get('./assets/sprites/sprites.svg')
	.then(response => {
		const div = document.createElement('div')
		
		div.style.display = 'none'
		div.innerHTML = response.replace(/\n/g, '')
		
		document.body.insertBefore(div, document.body.childNodes[0])
	})
	.catch(response => { console.log(response) })
