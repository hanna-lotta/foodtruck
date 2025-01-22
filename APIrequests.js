
//API NYCKEL
const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/keys'
const bodyToSend = {
name: 'Hanna'
}
const options = {
method: 'POST',
headers: {
	"Content-Type": 'application/json',  // vi skickar JSON i body
	//"x-zocom" : "yum-edVCa1E6zDZRztaq" //min API nyckel
},

body: JSON.stringify(bodyToSend)
}

try {
const response = await fetch(url,options)
	console.log('status är: ', response.status);
	
	const data = await response.json()
	console.log('data från API, key: ', data);
	

} catch (error) {
console.log('det gick inte ...', error.message);



//POST TENANTS

sendData();
	async function sendData() {
	const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/tenants'
	const bodyToSend = {
    name: 'Hanna'
}
	const options = {
    method: 'POST',
	headers: {
        "Content-Type": 'application/json',  
        "x-zocom": "yum-edVCa1E6zDZRztaq" 
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
}

//GET HELA MENYN


const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu';

try {
    const response = await fetch(url, {
        method: 'GET', 
        headers: {
            "Content-Type": 'application/json', 
            "x-zocom": "yum-edVCa1E6zDZRztaq" 
        }
    });

    console.log('Status är: ', response.status);


    const data = await response.json();
    console.log('Data från API: ', data);

} catch (error) {
    console.log('Det gick inte ...', error.message);
}
	

    
//Funktion för att visa dipsåsmeny
themenudip()
const menuItemsDip = document.querySelector('#menu-items-dip');
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

        const data = await response.json();
        console.log('Data från API: ', data);

        const items = data.items;
        console.log(items);


    } catch (error) {
        const message = 'Det gick inte ... ' + error.message;
        console.log(message);
        menuItemsDip.innerText = message;
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


        const data = await response.json();
        console.log('Data från API: ', data);

        const items = data.items;
        console.log(items);


    } catch (error) {
        	const message = 'Det gick inte ... ' + error.message;
        	console.log(message);
        	menuItemsDrink.innerText = message;
    }
	};



//GET ORDERSID
const orderurl = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/cm16/orders';

try {
const response = await fetch(orderurl, {
method: 'GET', 
headers: {
"Content-Type": 'application/json', 
"x-zocom": "yum-edVCa1E6zDZRztaq" 
}
});

console.log('Status från ordersID är: ', response.status);


const data = await response.json();
console.log('Get orders från API: ', data);



} catch (error) {
console.log('Det gick inte ...', error.message);
}
}
