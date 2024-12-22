import { apiKey } from "./constants.js";
import { removeFromOrder } from "./prepareOrder.js";
import {  addToOrder} from "./prepareOrder.js";
import { getOrderList } from "./prepareOrder.js";
const menuItems = document.querySelector('#menu-items');
const cartItems = document.querySelector('#cart-items');



async function createMenu(orderList) {
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
		
		
		
		// Rensa tidigare menyinnehåll
		menuItems.innerHTML = '';
		
		
		if (Array.isArray(items) && items.length > 0) {
			items.forEach(item => {
				const li = document.createElement('li');
				li.id = `wonton-${item.id}`
				li.innerText = `${item.name.toUpperCase()}................... ${item.price} SEK 
			${item.ingredients}`; 
				menuItems.append(li);
				
				
				const minusKnapp = document.getElementById('minusknapp');
				const plusKnapp = document.getElementById('plusknapp');
				const antalSpan = document.getElementById('antal');
				
				// När man klickar på menu items på sida 1, ska det skapas items med plus+minus knappar på sida 2
				li.addEventListener('click', () => createMenuOrderItem(item, cartItems, orderList));
				addToOrder(item) 
			});

		} else {
			menuItems.innerText = 'Inga menyalternativ tillgängliga';
		} 
	 } catch (error) {
		const message = 'Det gick inte ... ' + error.message;
		console.log(message);
		menuItems.innerText = message;
	 }
	}


function updateCartItems(orderList) {
	const cart = document.getElementById('cart-items');
	orderList.forEach(orderItem => {
		let li = document.getElementById(`item-${orderItem.id}`);
		
		if (!li) {
			li = document.createElement('li');
			li.id = `item-${orderItem.id}`;
			
			
			const textSpan = document.createElement('span');
			textSpan.className = 'item-text';
			li.appendChild(textSpan);
			
			
			cart.appendChild(li);
		}
		
		
		const textSpan = li.querySelector('.item-text');
		textSpan.textContent = orderItem.name; 
	});
	
	
}

function updateCartCount(orderList) {
	const cartCount = document.getElementById('cart-count');
	cartCount.textContent = orderList.length;
}

let antalVaror = 0

function Span(li) {
	const buttonspan = document.createElement('span');
	buttonspan.innerHTML = ' '
	buttonspan.className = 'antal'
	li.appendChild(buttonspan);
	return buttonspan; 
}


function createMenuOrderItem(item, cartItems, orderList) {
	const li = document.createElement('li');
	li.id = `wonton-${item.id}`
	li.innerText = `${item.name.toUpperCase()}................... ${item.price} SEK`
	
	
	function plus (li, item,antalSpan) {
		const plusKnapp = document.createElement('button');
		plusKnapp.innerHTML = '+';
		plusKnapp.className = 'plusknapp'
		plusKnapp.addEventListener('click', () => {
			addToOrder(item) 
			antalVaror++;
			antalSpan.innerHTML = antalVaror;
			updatePrice(orderList)
			
		});
		li.appendChild(plusKnapp);
		
		
	}
	
	
	const antalSpan = Span(li); 
	
	
	function minus (li) {
		const minusKnapp = document.createElement('button');
		minusKnapp.innerHTML = '-';
		minusKnapp.className = 'minusknapp'
		minusKnapp.addEventListener('click', () => {
			removeFromOrder(item)
			if (antalVaror > 0) {
				antalVaror--;
				antalSpan.innerHTML = antalVaror;
				updatePrice(orderList)
				
			}
		});
		li.appendChild(minusKnapp);
		console.log(li.innerHTML);
		
	}
	minus(li)
	plus(li,item,antalSpan)
	
	
	
	cartItems.appendChild(li);
	
	orderList.push(li.textContent); 
	updateCartItems(orderList); 
	updateCartCount(orderList)
	updatePrice(orderList)
	

	updatePrice(orderList)
	function updatePrice(orderList) {    
		const total = document.querySelector('.sum');  
		getOrderList()
		addToOrder(item)
		removeFromOrder(item)
		let prices = orderList.map(item => {
			let match = item.match(/(\d+)\s*SEK/);
			return match ? parseInt(match[1], 10) : 0;
			
		});
		console.log('Prices:', prices);

		let sum = prices.reduce((accumulator, price) => accumulator + price, 0);
		
			 total.innerHTML = sum + ' SEK';
			}
		}

	

export { createMenu }
