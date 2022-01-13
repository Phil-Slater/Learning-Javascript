
// PROMISES

/*let promise = new Promise(function (resolve, reject) {
    resolve(100) // resolved - 100 is passed to the .then
    reject() // rejected
})

promise.then(function (num) {
    console.log(num)
    console.log('Promise has been resolved')
    return "John" // passing a value to the next .then
}).then((name) => {
    console.log(name)
    console.log('Another then')
})

    .catch(function (error) {
        console.log('Catch')
        console.log(error)
    })*/

/*const moviesURL = 'https://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa'

let promise = new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest()
    request.onload = function () {
        console.log(this.responseText)
        let result = JSON.parse(this.responseText)
        resolve(result.Search)
    }

    request.onerror = function (error) {
        reject(error)
    }

    request.open('GET', moviesURL)
    request.send()
})

promise.then(function (movies) {
    console.log(movies)
}).catch(function (error) {
    console.log(error)
})
*/

/*
function getMovies() {
    const moviesURL = 'https://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa'

    let promise = new Promise((resolve, reject) => {
        let request = new XMLHttpRequest()
        request.onload = function () {
            console.log(this.responseText)
            let result = JSON.parse(this.responseText)
            resolve(result.Search)
        }

        request.onerror = function (error) {
            reject(error)
        }

        request.open('GET', moviesURL)
        request.send()
    })

    return promise

}

getMovies().then((movies) => {
    // movies.filter
    console.log(movies)
})*/

/*let promise = new Promise((resolve, reject) => {
    let counter = 0
    window.setInterval(() => {
        if (counter % 2 == 0) {
            resolve(counter)
        } else {
            reject(counter)
        }
    }, 2000)
})

promise.then((value) => {
    console.log(value)
}).catch((value) => {
    console.log(`Odd number ${value}`)
})*/


// FETCH API - network request - promises

// by default, fetch performs get request
/*fetch('https://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa')
    .then((response) => {
        return response.json() // promise returned - must evaluate again with another .then
    }).then((result) => {
        console.log(result) // movie objects
    })*/

/*function getAllMovies(moviesFetched) {
    fetch('https://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa')
        .then((response) => {
            return response.json() // promise returned - must evaluate again with another .then
        }).then((result) => {
            console.log(result) // movie objects
            moviesFetched(result.Search)
        })
}

getAllMovies(function (movies) {
    console.log(movies)
})*/


// ASYNC/AWAIT

async function getAllMovies() { // async and await cannot catch errors with .catch

    let response = await fetch('https://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa') // if using await, function must be marked with async
    let result = await response.json()
    return result.Search
}

getAllMovies().then((movies) => {
    console.log(movies)
})
