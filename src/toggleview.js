

function hideviews() {
	const meny = document.querySelector('#meny')
	const cartPage = document.querySelector('#cartPage')
	const yourOrder = document.querySelector('#your-order')
	if (meny, cartPage, yourOrder) {
		meny.classList.add('hidden')
		cartPage.classList.add('hidden')
		yourOrder.classList.add('hidden')
	}
}

function goToOrderPage() {
	const cart = document.querySelector('#cart')
	const cartPage = document.querySelector('#cartPage')
	cart.addEventListener('click', function() {
		hideviews()
		cartPage.classList.remove('hidden')
	})  
	
}

function goToMenuPage() {
	const order = document.querySelector('#order')
	const meny = document.querySelector('#meny')
	order.addEventListener('click', function() {
		hideviews()
		meny.classList.remove('hidden')
		location.reload()
		
	})
}

function goToYourOrderPage() { 
	const yourOrder = document.querySelector('#your-order')
	let takeButton = document.querySelector('.take-button')
	takeButton.addEventListener('click', function() {
		hideviews()
		document.querySelector('#your-order').classList.remove('hidden')
	}) 
}

function goToStart() {
	const cartOrder = document.querySelector('#cart-order')
	const meny = document.querySelector('#meny')
	cartOrder.addEventListener('click', function() {
		hideviews()
		meny.classList.remove('hidden')
	}) 
} 

export { goToOrderPage, hideviews, goToMenuPage, goToYourOrderPage, goToStart }
