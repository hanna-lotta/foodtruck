let orderList = []
import { updateCartCount, updatePrice} from '../cartAndPrice.js'


function addToOrder(item) {  const existingItem = orderList.find(i => i.id === item.id);  
	if (existingItem) {    
		existingItem.quantity++;  
	} else {    
		const price =  parseInt(item.price, 10) || 0;
		orderList.push({ ...item, quantity: 1, price: price });  
	}  
	updateCartCount(orderList);  
	updatePrice(orderList);
	console.log('foodtruck addtoorder ',orderList );
	
}

function removeFromOrder(itemId) {  
	const index = orderList.findIndex(item => item.id === itemId);  
	if (index !== -1 && orderList[index].quantity > 0) {    
		orderList[index].quantity--;    
		if (orderList[index].quantity === 0) {      
			orderList.splice(index, 1);    
		}    
		updateCartCount(orderList);		
		updatePrice(orderList);  
	}}
	
	function getOrderList() {
		return orderList
	}


	export { addToOrder, removeFromOrder, getOrderList,}
	
	