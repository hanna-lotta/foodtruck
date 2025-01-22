import { goToOrderPage, goToStart } from "./toggleview.js";
import { createMenuOrderItem, createQuantityButtons } from "./buttonsAndListItems.js";

const menuItemsDrink = document.querySelector('#menu-items-drink');
themenudrink([])  
async function themenudrink()  {
	const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=drink';
	
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
	
	
	const selectedItemsContainer = document.getElementById('selectedItemsContainer'); 
	
	menuItemsDrink.innerHTML = '';
	
	
	if (Array.isArray(items) && items.length > 0) {
		items.forEach(item => {
			const li = document.createElement('li');
			li.innerText = `DRICKA................... ${item.price} SEK 
				${item.name}`; 
			menuItemsDrink.append(li);

			
			li.addEventListener('click', function() {
				createMenuOrderItem(item, selectedItemsContainer)
				createQuantityButtons(item)
			})
			goToOrderPage()
			goToStart()
		});
	}
} catch (error) {
	const message = 'Det gick inte ... ' + error.message;
	console.log(message);
	menuItems.innerText = message;
	} 
}

export { themenudrink }