import { createMenu } from "./src/theMenu.js";
import { themenudip } from "./src/theMenuDip.js";
import { removeFromOrder } from "./src/prepareOrder.js";
import { addToOrder } from "./src/prepareOrder.js";
import { getOrderList } from "./src/prepareOrder.js";



// Variabler för DOM-element
const meny = document.querySelector('#meny')
const frame = document.querySelector('.frame');
const cartFrame = document.querySelector('.cart-frame') 
const cartItems = document.querySelector('#cart-items');
const order = document.querySelector('#order')
const yourOrder = document.querySelector('#your-order')
const cartOrder = document.querySelector('#cart-order')
const cartPage = document.querySelector('#cartPage')
const cart = document.querySelector('#cart')


meny.classList.remove('hidden')

function hideviews() {
	const meny = document.querySelector('#meny')
	const cartPage = document.querySelector('#cartPage')
	const yourOrder = document.querySelector('#your-order')
	if (meny, cartPage, yourOrder) {
		meny.classList.add('hidden')
		cartPage.classList.add('hidden')
		yourOrder.classList.add('hidden')
	}
}




function goToOrderPage() {
	const cart = document.querySelector('#cart')
	const cartPage = document.querySelector('#cartPage')
	cart.addEventListener('click', function() {
		console.log('du klickade på cart', cart);
		hideviews()
		cartPage.classList.remove('hidden')
	})  //TODO lägg till hidden i CSS !!
	
}
goToOrderPage()



//const order = document.querySelector('#order')
//const meny = document.querySelector('#meny')
function goToMenuPage() {
	order.addEventListener('click', function() {
		console.log('du klickade på order', order);
		hideviews()
		meny.classList.remove('hidden')
		//TODO lägg till hidden i CSS !!
	})
}
goToMenuPage()
//URKLIPP; SE OVAN 
//function YourOrderPage() { //TODO Glöm ej anropa alla hidden funktioner



function goToYourOrderPage() { //TODO Glöm ej anropa alla hidden funktioner
	const yourOrder = document.querySelector('#your-order')
	let takeButton = document.querySelector('.take-button')
	takeButton.addEventListener('click', function() {
		hideviews()
		document.querySelector('#your-order').classList.remove('hidden')
	}) //TODO lägg till hidden i CSS !!
}
goToYourOrderPage()


//const cartOrder = document.querySelector('#cart-order')
function goToStart() {
	cartOrder.addEventListener('click', function() {
		console.log('du klickade på cartorder', cartOrder);
		hideviews()
		meny.classList.remove('hidden')
		//ej denna //
		//document.querySelector('#meny').classList.remove('hidden')
	}) 
} //TODO lägg till hidden i CSS !!
goToStart()







// Kundvagnslista
let orderList = []


//funktion för att lägga till meny-lista/wonton
// Be API:et om menyn, skapa DOM-element för varje "menu item"
createMenu(orderList)



//Funktion för att visa dipsåsmeny
themenudip(orderList)


//Funktion för att visa drickmeny
const menuItemsDrink = document.querySelector('#menu-items-drink');
themenudrink(orderList)
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
	
		
		
		menuItemsDrink.innerHTML = '';
		
		
		if (Array.isArray(items) && items.length >= 0) {
			items.forEach(item => {
				const li = document.createElement('li');
				li.id = `drink-${item.id}`
				li.innerText = `DRICKA................... ${item.price} SEK 
				${item.name}`; 
				menuItemsDrink.append(li);
				
				const minusKnapp = document.getElementById('minusknapp');
				const plusKnapp = document.getElementById('plusknapp');
				const antalSpan = document.getElementById('antal');
				
				li.addEventListener('click', function() {
					addToOrder(item)  
					const li = document.createElement('li');
					li.id = `drink-${item.id}`
					li.innerText = `${item.name.toUpperCase()}................... ${item.price} SEK`
					console.log('li', li);
					
					let antalVaror = 0
					
					function Span() {
						const buttonspan = document.createElement('span');
						buttonspan.innerHTML = ' '
						buttonspan.className = 'antal'
						li.appendChild(buttonspan);
						return buttonspan; 
					}
					const antalSpan = Span(); 
					
					
					plus(item)
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
					minus(item)
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
					
					
					cartItems.appendChild(li);
					
					orderList.push(li.textContent); 
					updateCartItems(orderList); 
					updateCartCount(orderList)
					
					
					
					console.log('orderlist: ', orderList);
					orderList.forEach(item => console.log('Item:', item));
					console.log('Item structure:', orderList[0]);
					
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
				})
			});
		
			
			
			
			
			let takeButton = document.querySelector('.take-button')
			takeButton.addEventListener('click', function() {
				let orderObjects = getOrderList()
				const orderIds = orderObjects.map(item => item.id);
				
				console.log('map' ,orderList);
				console.log('orderID ' ,orderIds);
				
				
				
				sendData();
				async function sendData() {
					const postUrl = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/cm16/orders'
					const postData = {
						items: orderIds
					}
					const options = {
						method: 'POST',
						headers: {
							"Content-Type": 'application/json',  
							"x-zocom": "yum-edVCa1E6zDZRztaq" 
						},
						
						body: JSON.stringify(postData),
						
					}
					
					try {
						const response = await fetch(postUrl, options)
						console.log('full response: ', response.status);
						
						const data = await response.json()
						console.log('postdata från API: ', data);
						
						const codeText = document.querySelector('.code-text')
						codeText.innerText = `${data.order.id}`
						
						
						const eatText = document.querySelector('.eat-text')
						
						
						const eta = new Date(data.order.eta);
						const timestamp = new Date(data.order.timestamp);
						
						
						const differenceInMillis = eta - timestamp;
						
						
						const differenceInMinutes = Math.floor(differenceInMillis / 1000 / 60);
						
						console.log(`Väntetid i minuter: ${differenceInMinutes}`);
						eatText.innerText = `ETA ${differenceInMinutes} MIN`
						
						
					} catch (error) {
						console.log('det gick inte ...', error.message);
						
					}
				}
				
			})
		};
		
		
		
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
			console.log('uppdatera cartitems: ', orderList );
			
		}
		
		function updateCartCount(orderList) {
			const cartCount = document.getElementById('cart-count');
			cartCount.textContent = orderList.length;
			
		}
		
		
	} catch (error) {
		const message = 'Det gick inte ... ' + error.message;
		console.log(message);
		menuItemsDrink.innerText = message;
	}
};














