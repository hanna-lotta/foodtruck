//https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/
//API key
/*POST/keys
//tenants
POST/tenants
//menu
GET/menu
GET/menu/{id}

//order
POST/{tenant}/orders
GET/{tenant}/orders
GET/orders/{id}
//receipt
GET/receipts/{id}
*/

	/*const menuButton = document.querySelector('#menu-button')
	const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/keys'
	menuButton.addEventListener('click', async () => {
	
})*/
	const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/keys'
	const bodyToSend = {
    name: 'Hanna'
}
	const options = {
    method: 'POST',
	headers: {
        "Content-Type": 'application/json',  // vi skickar JSON i body
        
    },

    body: JSON.stringify(bodyToSend)
}
	
	try {
	const response = await fetch(url,options)
		console.log('status är: ', response.status);
		
		const data = await response.json()
		console.log('data från API: ', data);
		

} catch (error) {
	console.log('det gick inte ...', error.message);
	
}

const key = key : "yum-edVCa1E6zDZRztaq"
