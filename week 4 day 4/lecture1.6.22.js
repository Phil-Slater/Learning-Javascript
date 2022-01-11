// CALLBACKS - when a function calls a function.. sometime in the future

const counterHeading = document.getElementById("counterHeading")



// window.setInterval (function to call, how often to call in milliseconds)
// called until it is cancelled
let count = 0
let intervalId = window.setInterval(function () {
    count += 1
    console.log(count)
    counterHeading.innerHTML = count
}, 5000)

//console.log(intervalId)
// Cancel the interval
//window.clearInterval(intervalId)

window.setTimeout(function () {
    console.log("Set timeout called!")
}, 5000)