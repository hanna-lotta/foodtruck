

function hideviews() {
	const meny = document.querySelector('#meny')
	const cartPage = document.querySelector('#cartPage')
	const yourOrder = document.querySelector('#your-order')
	const recietPage = document.querySelector('#recietpage')
	if (meny && cartPage && yourOrder && recietPage) {
		meny.classList.add('hidden')
		cartPage.classList.add('hidden')
		yourOrder.classList.add('hidden')
		recietPage.classList.add('hidden')
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

function goToRecietPage() {
	 const recietButton = document.getElementById('kvitto-button');
    const recietPage = document.getElementById('recietpage');
    recietButton.addEventListener('click', function() {
        hideviews();
        recietPage.classList.remove('hidden');

		 // Hämta beställningen
        const order = JSON.parse(localStorage.getItem('latestOrder'));
        const recietFrame = document.querySelector('.reciet-frame');
        recietFrame.innerHTML = "<h1>KVITTO</h1>"; // Rensa och lägg till rubrik

		const orderId = localStorage.getItem('latestOrderId');
		if (orderId) {
    	recietFrame.innerHTML += `<p class="order-id">#${orderId}</p>`;
		}


        // Lägg till varje beställt item
        order.forEach(item => {
            recietFrame.innerHTML += `<p>${item.name}.................. ${item.price} SEK  ${item.quantity} stycken</p>`;
        });


		const totalPrice = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
		recietFrame.innerHTML += `<hr><p class="sum">Totalt: ${totalPrice} SEK</p>`;
    	});
		}

function goToStart() {
	const cartOrder = document.querySelector('#cart-order')
	const meny = document.querySelector('#meny')
	cartOrder.addEventListener('click', function() {
		hideviews()
		meny.classList.remove('hidden')
	}) 
} 

export { goToOrderPage, hideviews, goToMenuPage, goToYourOrderPage, goToStart, goToRecietPage }
