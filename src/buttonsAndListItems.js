import { addToOrder, removeFromOrder, getOrderList } from "./prepareOrder.js";

function createQuantityButtons(item) {    
		const buttons = document.createElement("div");    
		buttons.classList.add("quantity-buttons");    
		const plusButton = document.createElement("button");    
		plusButton.textContent = "+";    
		plusButton.addEventListener("click", () => {
			item.quantity += 1;
			quantitySpan.textContent = item.quantity + ` stycken`; 
			addToOrder({...item}); 
		});    
		buttons.appendChild(plusButton);    
		
		const quantitySpan = document.createElement("span");	
		quantitySpan.textContent = item.quantity + ` stycken`;	
		quantitySpan.classList.add("quantity"); 
		buttons.appendChild(quantitySpan); 
		
		
		
		const minusButton = document.createElement("button");    
		minusButton.textContent = "-";		
		minusButton.addEventListener("click", () => { 
			if (item.quantity > 0) {
				item.quantity -= 1;  
				quantitySpan.textContent = item.quantity + ` stycken`; 
				removeFromOrder(item.id);   
			}
				 
		});    
		buttons.appendChild(minusButton);  
		
		return buttons;
	}

	//använd denna istället för ayy skapa li
	function createMenuOrderItem(item, selectedItemsContainer) {
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
		li.innerText = `${item.name.toUpperCase()}................... ${item.price} SEK`
		selectedItemsContainer.appendChild(li);
		li.appendChild(createQuantityButtons( { id: item.id, name: item.name, price : item.price, quantity: item.quantity } ) );
	})			
	}
	loadCartItems()
	document.addEventListener("DOMContentLoaded", loadCartItems);
	}
	export { createQuantityButtons, createMenuOrderItem }