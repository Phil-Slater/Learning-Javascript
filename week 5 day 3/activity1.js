const ordersDiv = document.getElementById('ordersDiv')
const placeOrderButton = document.getElementById('placeOrderButton')
const confirmationMessage = document.getElementById('confirmationMessage')

function getAllOrders(ordersFetched) {
    fetch('https://troubled-peaceful-hell.glitch.me/orders')
        .then((response) => {
            return response.json() // promise returned - must evaluate again with another .then
        }).then((result) => {
            //console.log(result)
            ordersFetched(result)
        })
}



function displayOrders(ordersDisplayed) {
    let result = ordersDisplayed.map(function (order) {
        return `<p>${order.email}</p>
        <p>${order.type}</p>
        <p>${order.size}</p>
        <p>${order.price}</p>`
    })
    ordersDiv.innerHTML = result.join('')
}

/*function addCoffeeOrder() {
    fetch('https://troubled-peaceful-hell.glitch.me/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: 'hellocoffee@gmail.com',
            type: 'Black',
            size: 'Large',
            price: 6
        })
    })
}

addCoffeeOrder()*/
getAllOrders((orders) => {
    displayOrders(orders)
    //console.log(orders)
})


placeOrderButton.addEventListener('click', function () {
    fetch('https://troubled-peaceful-hell.glitch.me/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: 'hellocoffee@gmail.com',
            type: 'Black',
            size: 'Large',
            price: 6
        })
    }).then(response => {
        return response.json()
    }).then(result => {
        console.log(result.message)
        confirmationMessage.innerHTML = result.message
    })
})