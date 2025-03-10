
import { createMenu } from "./src/theMenu.js";
import { themenudip } from "./src/theMenuDip.js";
import { getOrderList, addToOrder, removeFromOrder, } from "./src/prepareOrder.js";
import { goToOrderPage, hideviews, goToMenuPage, goToYourOrderPage, goToStart } from "./src/toggleview.js";
import { themenudrink } from "./src/theMenuDrink.js";
import { updateCartCount, updatePrice, } from "./cartAndPrice.js";
import { createQuantityButtons, createMenuOrderItem } from "./src/buttonsAndListItems.js";



// Variabler för DOM-element
const meny = document.querySelector('#meny')
const frame = document.querySelector('.frame');
const cartFrame = document.querySelector('.cart-frame') 
const order = document.querySelector('#order')
const yourOrder = document.querySelector('#your-order')
const cartOrder = document.querySelector('#cart-order')
const cartPage = document.querySelector('#cartPage')
const cart = document.querySelector('#cart')


meny.classList.remove('hidden')

//funktion för att lägga till meny-lista/wonton
// Be API:et om menyn, skapa DOM-element för varje "menu item"
createMenu()



//Funktion för att visa dipsåsmeny
// Be API:et om menyn, skapa DOM-element för varje "menu item-dip"
themenudip([])


//Funktion för att visa drickmeny
// Be API:et om menyn, skapa DOM-element för varje "menu item-drink"
themenudrink([])  


let takeButton = document.querySelector('.take-button')
takeButton.addEventListener('click', function() {
	let orderObjects = getOrderList()
	/*const orderItems = orderObjects.map(item => item.id);*/
	
	// Upprepa varje ID beroende på dess quantity
    let orderItems = [];
    orderObjects.forEach(item => {
        for (let i = 0; i < item.quantity; i++) {
            orderItems.push(item.id); // Lägg till ID:t flera gånger
			
        }
		
    });

	/*const orderItems = orderObjects.map(item => ({
        id: item.id,
        quantity: Number(item.quantity)
    })); */

	
	sendData();
	async function sendData() {
		const postUrl = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/cm16/orders'
		const postData = {
			items: orderItems
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
			
			
			eatText.innerText = `ETA ${differenceInMinutes} MIN`

			return true; // Order skickades OK
			
			
		} catch (error) {
			console.log('det gick inte ...', error.message);
			
		}
	}
	goToYourOrderPage()
	goToMenuPage()
})

