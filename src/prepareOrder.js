let orderList = []

function addToOrder(item) {
	orderList.push(item)
}

function removeFromOrder(item) {
	// TIPS: använd filter för att ta bort ett objekt från en lista
	if (!item) {
		console.error("Item is undefined");
		return;
	}
	orderList = orderList.filter(i => i.id !== item.id);
	orderList.pop(item)
}

function getOrderList() {
	return orderList
}

export { addToOrder, removeFromOrder, getOrderList }
