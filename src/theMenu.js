import { apiKey } from "./constants.js";
import { createQuantityButtons, createMenuOrderItem } from "./buttonsAndListItems.js";

// Funktion för att skapa meny sida 1
async function createMenu() {
	const menuItems = document.querySelector('#menu-items');
	const cartItems = document.querySelector('#cart-items');
	const selectedItemsContainer = document.querySelector('#selectedItemsContainer'); 

	const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=wonton';
	
	try {
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			"Content-Type": 'application/json',
			"x-zocom": apiKey
		}
	});
	
	const data = await response.json();
	
	const items = data.items;
	
	menuItems.innerHTML = '';
	
	
	if (Array.isArray(items) && items.length > 0) {
		items.forEach(item => {
			const li = document.createElement('li');
			li.innerText = `${item.name.toUpperCase()}................... ${item.price} SEK 
			${item.ingredients}`; 
			menuItems.append(li);
			
			
			// När man klickar på menu items på sida 1, ska det skapas items med plus+minus knappar på sida 2
			li.addEventListener('click', () => {
				createMenuOrderItem(item, selectedItemsContainer)

				createQuantityButtons(item)
			
		});
	})
	}
	} catch (error) {
	const message = 'Det gick inte ... ' + error.message;
	console.log(message);
	menuItems.innerText = message;
	} 
}



export { createMenu }
