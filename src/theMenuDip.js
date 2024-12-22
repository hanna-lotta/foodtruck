import { getOrderList } from "./prepareOrder.js";
import { removeFromOrder } from "./prepareOrder.js";
import { addToOrder } from "./prepareOrder.js";

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
		
		
		if (Array.isArray(items) && items.length >= 0) {
			items.forEach(item => {
				const li = document.createElement('li');
				li.id = `dip-${item.id}`
				li.innerText = `${item.type.toUpperCase()}SÅS................... ${item.price} SEK 
				${item.name}`; 
				menuItemsDip.append(li);
				
				const minusKnapp = document.getElementById('minusknapp');
				const plusKnapp = document.getElementById('plusknapp');
				const antalSpan = document.getElementById('antal');
				
				li.addEventListener('click', function() {
					addToOrder(item) 
					const li = document.createElement('li');
					li.id = `dip-${item.id}`
					li.innerText = `${item.name.toUpperCase()} DIP................... ${item.price} SEK`
					orderList.push(li.textContent);
					
					
					
					let antalVaror = 0
					
					
					function Span() {
						const buttonspan = document.createElement('span');
						buttonspan.innerHTML = ' '
						buttonspan.className = 'antal'
						li.appendChild(buttonspan);
						return buttonspan; 
					}
					const antalSpan = Span(); 
					
					function plus (item) {
						const plusKnapp = document.createElement('button');
						plusKnapp.innerHTML = '+';
						plusKnapp.className = 'plusknapp'
						plusKnapp.addEventListener('click', () => {
							addToOrder(item) 
							antalVaror++;
							antalSpan.innerHTML = antalVaror;
							updatePrice()
							
						});
						li.appendChild(plusKnapp);
						
						
					}
					
					
					function minus (item) {
						const minusKnapp = document.createElement('button');
						minusKnapp.innerHTML = '-';
						minusKnapp.className = 'minusknapp'
						minusKnapp.addEventListener('click', () => {
							removeFromOrder(item)
							if (antalVaror > 0) {
								antalVaror--;
								antalSpan.innerHTML = antalVaror;
								updatePrice()
								
							}
						});
						li.appendChild(minusKnapp);
						console.log(li.innerHTML);
					}
					minus(item)
					plus(item)
					
					
					cartItems.appendChild(li);
					
					updateCartItems(orderList); 
					updateCartCount(orderList)

					updatePrice()
						function updatePrice() {    
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
						})
				})
			
			
			function updateCartItems() {
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
