
const displayStockButton = document.getElementById('displayStockButton')

const stocksDiv = document.getElementById('stocksDiv')



displayStockButton.addEventListener('click', function () {
    let request = new XMLHttpRequest()

    request.addEventListener('load', function () {
        result = JSON.parse(this.responseText)
        console.log(result)
        const stocks = result.map((stock) => {
            return `<p>${stock.symbol}</p>
            <p>${stock.title}</p>
            <p>${stock.price}</p>
            <p>${stock.quantity}</p>`
        })
        stocksDiv.innerHTML = stocks.join('')

    })

    request.open('GET', 'https://endurable-bead-polo.glitch.me/stocks')
    request.send()

})
//function loadStock() {}