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
/*const menuItems =document.querySelector('#menu-items')
const menuButton =document.querySelector('#menu-button')
const itemsList =document.querySelector('#items-list')
menuButton.addEventListener('click', async () => {
	const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=wonton';

try {
    const response = await fetch(url, {
        method: 'GET', // Anger HTTP-metoden
        headers: {
            "Content-Type": 'application/json', // Vi skickar JSON
            "x-zocom": "yum-edVCa1E6zDZRztaq" // Din API-nyckel
        }
    });

    console.log('Status är: ', response.status);

    const data = await response.json();
    console.log('Data från API: ', data);
	const items = data.items
	console.log(items);
	const li = document.createElement('li')
	li.innerText = `${items}`
	menuItems.append(li) 
	

} catch (error) {
	const message = 'Det gick inte ...' + error.message
    console.log(message)
	menuItems.innerText = message
}
})*/

    
//LYCKAS SKRIVA UT MENU ITEMS
//const threeMenus = document.querySelector('.three-menus');
const menuItems = document.querySelector('#menu-items');


//menuButton.addEventListener('click', 
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
				//const menu1 = document.createElement("ul")
				//menu1.id = menu1;
				//menu1.innerHTML = 
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
const menuItemsDip = document.querySelector('#menu-items-dip');
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
                menuItems-dip.append(li);
				
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
const menuItemsDrink = document.querySelector('#menu-items-drink');
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
                menuItems-drink.append(li);
				
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
	document.querySelector(menuItems-dip)
	document.querySelector(menuItems-drink)
 });
 
*/

/*
// Hämta båda menyerna när sidan laddas funkar inte rätt
window.addEventListener('load', () => {
    themenu('/wonton');
    themenudip('/dip');
});

*/
