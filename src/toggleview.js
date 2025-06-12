

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

function newOrder() {
	const order = document.querySelector('#order-recietpage')
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
		const orderList = document.querySelector('#recietpage .order-list');
        orderList.innerHTML = ""; 
        

		const orderId = localStorage.getItem('latestOrderId');
		if (orderId) {
    	orderList.innerHTML += `<p class="order-id">#${orderId.toUpperCase()}</p>`;
		}


        // Beställningen
        order.forEach(item => {
            orderList.innerHTML += `
			<div class="reciet-row">
			<span class="reciet-name">${item.name.toUpperCase()}</span>
			<span class="reciet-dots"></span>
			<span class="reciet-price">${item.price} SEK</span>
			</div>
			<div class="reciet-quantity">${item.quantity} stycken</div>`;
			
			
        });
		const totalPrice = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
		document.querySelector('#recietpage .sum').textContent = `${totalPrice} SEK`;

		newOrder();
		/*
		  const orderBtn = document.querySelector('#recietpage #order-recietpage');
        if (orderBtn) {
            orderBtn.addEventListener('click', goToMenuPage);
        }
		console.log('gotomenupage', goToMenuPage);*/
		
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
