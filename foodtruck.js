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

/*
	const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/keys'
	const bodyToSend = {
    name: 'Hanna'
}
	const options = {
    method: 'POST',
	headers: {
        "Content-Type": 'application/json',  // vi skickar JSON i body
        //key : "yum-edVCa1E6zDZRztaq" //min API nyckel
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
	
} */
/*	sendData();
	async function sendData() {
	const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/tenants'
	const bodyToSend = {
    name: 'Hanna'
}
	const options = {
    method: 'POST',
	headers: {
        "Content-Type": 'application/json',  // vi skickar JSON i body
        "x-zocom": "yum-edVCa1E6zDZRztaq" //min API nyckel 
    },

    body: JSON.stringify(bodyToSend),
	 
}
	
	try {
		const response = await fetch(url, options)
		console.log('full response: ', response.status);
		
		const data = await response.json()
		console.log('data från API: ', data);
		

	} catch (error) {
	console.log('det gick inte ...', error.message);
	
}
}*/
//GET
/*
const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu';

try {
    const response = await fetch(url);
	const bodyToSend = {
		name: 'Hanna'
	}
		const options = {
		method: 'GET',
		headers: {
			"Content-Type": 'application/json',  // vi skickar JSON i body
			"x-zocom": "yum-edVCa1E6zDZRztaq" //min API nyckel 
			
	
		},
	
		body: JSON.stringify(bodyToSend),
		 
	}
    console.log('Status:', response.status);
    
    if (!response.ok) {
        throw new Error('Nätverksrespons var inte ok: ' + response.statusText);
    }
    
    const data = await response.json();
    console.log('Data:', data);
} catch (error) {
    console.error('Det uppstod ett fel:', error);
}


*/
/*const input = document.querySelector('#input')
const button = document.querySelector('#send-request')
button.addEventListener('click', async () => {
	
	
	//console.log('ska skicka request');
	
    const response = await fetch('https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/' )
	url += '/menu'
	console.log(response.status);
	
    const data = await response.json()
    console.log('Data:', data)

	//input.innerText = data.value

	//
	
	async function sendData() {
	const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/'
	url += '/menu'
	const bodyToSend = {
    name: 'Hanna'
}
	const options = {
    method: 'GET',
	headers: {
        "Content-Type": 'application/json',  // vi skickar JSON i body
        "x-zocom": "yum-edVCa1E6zDZRztaq" //min API nyckel 
		

    },

    body: JSON.stringify(bodyToSend),
	 
}
	
	try {
		const response = await fetch(url)
		console.log('full response: ', response.status);
		
		const data = await response.json()
		console.log('data från API: ', data);
		

	} catch (error) {
	console.log('det gick inte ...', error.message);
	
}
}

sendData();*/

//GET

/*
	//async function sendDataGet() {
	const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu'
	
	
	headers: {
        "Content-Type"; 'application/json',  // vi skickar JSON i body
        "x-zocom"; "yum-edVCa1E6zDZRztaq" //min API nyckel 
    }

	
	try {
		const response = await fetch(url)
		console.log('status är: ', response.status);
		
		const data = await response.json()
		console.log('data från API: ', data);
		

	} catch (error) {
	console.log('det gick inte ...', error.message);
	
}
//	}*/
//LYCKAS!!
const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu';

try {
    const response = await fetch(url, {
        method: 'GET', // Anger HTTP-metoden
        headers: {
            "Content-Type": 'application/json', // Vi skickar JSON
            "x-zocom": "yum-edVCa1E6zDZRztaq" // Din API-nyckel
        }
    });

    console.log('Status är: ', response.status);

    // Kontrollera om svaret är okej
    if (!response.ok) {
        throw new Error('Nätverksrespons var inte ok: ' + response.statusText);
    }

    const data = await response.json();
    console.log('Data från API: ', data);

} catch (error) {
    console.log('Det gick inte ...', error.message);
}

	