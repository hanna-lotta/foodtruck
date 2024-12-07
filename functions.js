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

//funktion för att lägga till meny-lista/wonton
themenu()
async function themenu()  {
const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=wonton';

try {
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			"Content-Type": 'application/json',
			"x-zocom": "yum-edVCa1E6zDZRztaq"
		}
	});

	console.log('Status är: ', response.status);

	// Kontrollera om svaret är okej
	if (!response.ok) {
		const errorData = await response.json();
		console.log('Felmeddelande:', errorData);
		throw new Error('Nätverksrespons var inte ok: ' + response.statusText);
	}

	const data = await response.json();
	console.log('Data från API: ', data);

	const items = data.items;
	console.log(items);

	// Rensa tidigare menyinnehåll
	menuItems.innerHTML = '';

	// Kontrollera att items är en array och har element
	if (Array.isArray(items) && items.length > 0) {
		items.forEach(item => {
			const li = document.createElement('li');
			li.innerText = `${item.name}................... ${item.price} SEK 
			${item.ingredients}`; // Anta att varje item är en sträng
			menuItems.append(li);
			
		});
	} else {
		menuItems.innerText = 'Inga menyalternativ tillgängliga';
	}

} catch (error) {
	const message = 'Det gick inte ... ' + error.message;
	console.log(message);
	menuItems.innerText = message;
}
};

//Funktion för att visa dipsåsmeny
themenudip()
	async function themenudip()  {
    const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=dip';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "x-zocom": "yum-edVCa1E6zDZRztaq"
            }
        });

        console.log('Status är: ', response.status);

        // Kontrollera om svaret är okej
        if (!response.ok) {
            const errorData = await response.json();
            console.log('Felmeddelande:', errorData);
            throw new Error('Nätverksrespons var inte ok: ' + response.statusText);
        }

        const data = await response.json();
        console.log('Data från API: ', data);

        const items = data.items;
        console.log(items);

        // Rensa tidigare menyinnehåll
        menuItems.innerHTML = '';

        // Kontrollera att items är en array och har element
        if (Array.isArray(items) && items.length > 0) {
            items.forEach(item => {
                const li = document.createElement('li');
                li.innerText = `${item.type}SÅS................... ${item.price} SEK 
				${item.name}`; // Anta att varje item är en sträng
                menuItems.append(li);
				
            });
        } else {
            menuItems.innerText = 'Inga menyalternativ tillgängliga';
        }

    } catch (error) {
        const message = 'Det gick inte ... ' + error.message;
        console.log(message);
        menuItems.innerText = message;
    }
};

//Funktion för att visa drickmeny
themenudrink()
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

        console.log('Status är: ', response.status);

        // Kontrollera om svaret är okej
        if (!response.ok) {
            const errorData = await response.json();
            console.log('Felmeddelande:', errorData);
            throw new Error('Nätverksrespons var inte ok: ' + response.statusText);
        }

        const data = await response.json();
        console.log('Data från API: ', data);

        const items = data.items;
        console.log(items);

        // Rensa tidigare menyinnehåll
        menuItems.innerHTML = '';

        // Kontrollera att items är en array och har element
        if (Array.isArray(items) && items.length > 0) {
            items.forEach(item => {
                const li = document.createElement('li');
                li.innerText = `${item.type}................... ${item.price} SEK 
				${item.name}`; // Anta att varje item är en sträng
                menuItems.append(li);
				
            });
        } else {
            menuItems.innerText = 'Inga menyalternativ tillgängliga';
        }

    } catch (error) {
        const message = 'Det gick inte ... ' + error.message;
        console.log(message);
        menuItems.innerText = message;
    }
};



/*
// Hämta båda menyerna när sidan laddas funkar inte rätt
window.addEventListener('load', () => {
   document.querySelector(menuItems)
});

*/

