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

/*
let orderList = [];

import { updateCartCount, updatePrice } from "../cartAndPrice.js";

function addToOrder(item) {
    const existingItemIndex = orderList.findIndex(i => i.id === item.id);

    if (existingItemIndex !== -1) {
        // Skapa en ny array med uppdaterad kvantitet (immutabel uppdatering)
        orderList = orderList.map((i, index) =>
            index === existingItemIndex ? { ...i, quantity: i.quantity + 1 } : i
        );
    } else {
        // Lägg till ny vara
        const price = parseInt(item.price, 10) || 0;
        orderList = [...orderList, { ...item, quantity: 1, price: price }];
    }

    updateCartCount(orderList);
    updatePrice(orderList);
    updateOrderListUI(); // Uppdatera UI så det syns
    console.log("foodtruck addToOrder:", orderList);
}

function removeFromOrder(itemId) {
    orderList = orderList
        .map(item => (item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter(item => item.quantity > 0); // Ta bort om quantity är 0

    updateCartCount(orderList);
    updatePrice(orderList);
    updateOrderListUI(); // Uppdatera UI
}

function getOrderList() {
    return orderList;
}

// Uppdatera UI-listan med beställningar
function updateOrderListUI() {
    const orderListContainer = document.getElementById("order-list");
    if (!orderListContainer) return;

    orderListContainer.innerHTML = ""; // Rensa UI-listan

    orderList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} x${item.quantity} - ${item.price * item.quantity}kr`;
        orderListContainer.appendChild(li);
    });
}
*/	
	export { addToOrder, removeFromOrder, getOrderList,}
	
	