import { getOrderList } from "./prepareOrder.js";
import { removeFromOrder } from "./prepareOrder.js";
import { addToOrder } from "./prepareOrder.js";
import { createQuantityButtons } from "./buttonsAndListItems.js";




const menuItemsDip = document.querySelector('#menu-items-dip');
const cartItems = document.querySelector('#cart-items');

async function themenudip(orderList)  {
	const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=dip';
	
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				"Content-Type": 'application/json',
				"x-zocom": "yum-edVCa1E6zDZRztaq"
			}
		});
		
		const data = await response.json();
		
		
		const items = data.items;
		
		menuItemsDip.innerHTML = '';
		
		const selectedItemsContainer = document.getElementById('selectedItemsContainer'); 
		
		if (Array.isArray(items) && items.length >= 0) {
			items.forEach(item => {
				const li = document.createElement('li');
				li.innerText = `${item.type.toUpperCase()}SÅS................... ${item.price} SEK 
				${item.name}`; 
				menuItemsDip.append(li);
				
				
				li.addEventListener('click', function() {
					if (typeof item.quantity === 'undefined') {
						item.quantity = 1;
					}
					addToOrder(item)  
					// Spara uppdaterad kundvagn till localStorage
                    localStorage.setItem('orderList', JSON.stringify(getOrderList()));

					function loadCartItems() {
    					const selectedItemsContainer = document.getElementById('selectedItemsContainer');
    					selectedItemsContainer.innerHTML = ''; // Rensa listan först

   				 	// Hämta ordern från localStorage
    				let orderList = JSON.parse(localStorage.getItem('orderList')) || [];

    				orderList.forEach(item => {
					const li = document.createElement('li');
					li.innerText = `${item.name.toUpperCase()} DIP................... ${item.price} SEK`
					selectedItemsContainer.appendChild(li);
					li.appendChild(createQuantityButtons( { id: item.id, name: item.name, price : item.price, quantity: item.quantity } ) );
					
					createQuantityButtons(item)
	})
}
loadCartItems()
document.addEventListener("DOMContentLoaded", loadCartItems);
				}) 
			}) 
		} else {
			menuItemsDip.innerText = 'Inga menyalternativ tillgängliga';
		}
		
	} catch (error) {
		const message = 'Det gick inte ... ' + error.message;
		console.log(message);
		menuItemsDip.innerText = message;
	}
};

export { themenudip }
