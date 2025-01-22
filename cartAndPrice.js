function updateCartCount(orderList) {    
	const totalCount = orderList.reduce((sum, item) => sum + item.quantity, 0);	
	document.getElementById('cart-count').textContent = totalCount;
	
	    
}
function updatePrice(orderList) {	
	const totalPrice = orderList.reduce((sum, item) => sum + item.price * item.quantity, 0);	
	document.querySelector('.sum').textContent = totalPrice + ' SEK';
	console.log('foodtruck updateprice ',orderList );
	
}

export { updateCartCount, updatePrice, }