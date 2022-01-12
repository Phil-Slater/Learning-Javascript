const sizeSelect = document.getElementById('sizeSelect')
const viewOrdersButton = document.getElementById('viewOrdersButton')
const ordersDiv = document.getElementById('ordersDiv')
const orderEmailBox = document.getElementById('orderEmailBox')
const coffeeTypeBox = document.getElementById('coffeeTypeBox')
const emailSearchBox = document.getElementById('emailSearchBox')
const emailSearchForm = document.getElementById('emailSearchForm')
const emailDeleteForm = document.getElementById('emailDeleteForm')
const emailDeleteBox = document.getElementById('emailDeleteBox')
const addCoffeeOrderForm = document.getElementById('addCoffeeOrderForm')
const orderSuccessDiv = document.getElementById('orderSuccessDiv')
const orderDeletedDiv = document.getElementById('orderDeletedDiv')

function viewCoffeeOrders(ordersFetched) {
    viewOrdersButton.addEventListener("click", function () {
        let request = new XMLHttpRequest()
        request.addEventListener('load', function () {
            let result = JSON.parse(this.responseText)
            ordersFetched(result)
        })
        request.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders')
        request.send()
    })
}

function viewOrdersByEmail(ordersFetched) {
    emailSearchForm.addEventListener("submit", function (event) {
        event.preventDefault()
        let input = emailSearchBox.value
        console.log(input)
        let request = new XMLHttpRequest()
        request.addEventListener('load', function () {
            result = JSON.parse(this.responseText)
            ordersFetched(result)
        })
        request.open('GET', "https://troubled-peaceful-hell.glitch.me/orders/" + input + "")
        request.send()
    })
}

function displayOrders(orders) {
    if (orders.message === 'Order not found') {
        ordersDiv.innerHTML = `<p>No orders found.</p>`
    } else {
        const orderList = orders.map((order) => {
            return `<p>${order.email}</p>
        <p>${order.type}</p>
        <p>${order.size}</p>
        <p>${order.price}</p>`
        })
        ordersDiv.innerHTML = orderList.join('')
    }
}

viewOrdersByEmail(function (orders) {
    displayOrders(orders)
})

viewCoffeeOrders(function (orders) {
    displayOrders(orders)
})

addCoffeeOrderForm.addEventListener("submit", function (event) {
    event.preventDefault()
    let request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                orderSuccessDiv.innerHTML = `<h3>Order Submitted!</h3>`
                clearOrderDiv()
            }
        }
    }
    request.open('POST', 'https://troubled-peaceful-hell.glitch.me/orders')
    request.setRequestHeader('Content-Type', 'application/json')
    const body = {
        email: orderEmailBox.value,
        type: coffeeTypeBox.value,
        size: sizeSelect.value,
        price: coffeePriceBySize()
    }
    request.send(JSON.stringify(body))
})

emailDeleteForm.addEventListener("submit", function (event) {
    event.preventDefault()
    let input = emailDeleteBox.value
    console.log(input)
    let request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                orderDeletedDiv.innerHTML = `<h3>Order Deleted!</h3>`
                clearOrderDiv()
            }
        }
    }
    request.open('DELETE', "https://troubled-peaceful-hell.glitch.me/orders/" + input + "")
    request.send()
})

function coffeePriceBySize() {
    if (sizeSelect.value == 'Small') {
        return 3
    } else if (sizeSelect.value == 'Medium') {
        return 5
    } else if (sizeSelect.value == 'Large') {
        return 7
    }
}

window.addEventListener("click", function () {
    orderSuccessDiv.innerHTML = ""
    orderDeletedDiv.innerHTML = ""
})

function clearOrderDiv() {
    setTimeout(() => {
        orderSuccessDiv.innerHTML = ""
        orderDeletedDiv.innerHTML = ""
    }, 5000)
}