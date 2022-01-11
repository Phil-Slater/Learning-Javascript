const getDogFactButton = document.getElementById("getDogFactButton")

const dogFactHeading = document.getElementById("dogFactHeading")


function getDogFacts() {
    getDogFactButton.addEventListener("click", function () {
        let request = new XMLHttpRequest()

        request.addEventListener("load", function () {

            dogFacts = JSON.parse(this.responseText)
            const dogFactIems = dogFacts.map((item) => {
                return `<h5>${item.fact}</h5>`
            })
            dogFactHeading.innerHTML = dogFactIems.join('')

        })
        request.open('GET', 'https://island-bramble.glitch.me/dog-facts')
        request.send()
    })
}

getDogFacts()