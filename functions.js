//POST
/*
sendData();
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
