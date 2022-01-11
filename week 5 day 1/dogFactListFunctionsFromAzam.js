const dogFactList = document.getElementById('dogFactList')

// https://island-bramble.glitch.me/dog-facts


function getDogFacts(dogFactsFetched) {

    let request = new XMLHttpRequest()

    request.onload = function () {
        const facts = JSON.parse(this.responseText)
        dogFactsFetched(facts)
    }

    request.onreadystatechange = function () {
        console.log(this.readyState)

        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                console.log(this.responseText)
            }
        }
    }

    /*    request.addEventListener('load', function () {
            const facts = JSON.parse(this.responseText)
            dogFactsFetched(facts)
        })*/

    /*  request.addEventListener('readystatechange', function () {
          console.log(this.readyState)
  
          if (this.readyState == XMLHttpRequest.DONE) {
              if (this.status == 200) {
                  console.log(this.responseText)
              }
          }
      })*/

    request.open('GET', 'https://island-bramble.glitch.me/dog-facts')
    request.send()
}

function displayDogFacts(facts) {

    const dogFactItems = facts.map((item) => {
        return `<li>${item.fact}</li>`
    })

    console.log(dogFactItems)
    dogFactList.innerHTML = dogFactItems.join('')
}

function getDogFacts(facts) {
    displayDogFacts(facts)
}
