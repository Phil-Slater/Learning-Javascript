
const jokeButton = document.getElementById("jokeButton")
const jokeHeading = document.getElementById("jokeHeading")

jokeButton.addEventListener("click", function () {
    let request = new XMLHttpRequest()

    request.addEventListener("load", function () {

        let result = JSON.parse(this.responseText)
        console.log(this.responseText)
        console.log(result)
        console.log(result.value)
        console.log(result.value.joke)
        jokeHeading.innerHTML = result.value.joke
    })
    request.open('GET', 'http://api.icndb.com/jokes/random')
    request.send()
})