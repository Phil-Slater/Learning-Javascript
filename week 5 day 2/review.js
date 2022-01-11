
const movieListUL = document.getElementById("movieListUL")
const movieDetailsDIV = document.getElementById("movieDetailsDIV")

function getMovies(moviesFetched) {

    // AJAX = Async JavaScript and XML 
    let request = new XMLHttpRequest();
    request.addEventListener("load", function () {
        let result = JSON.parse(this.responseText)
        moviesFetched(result.Search)
    })

    request.open("GET", 'http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa')
    request.send();
}

// UPDATE THIS TO USE CALLBACKS
function getMovieDetails(imdbID) {

    const movieDetailsUrl = `http://www.omdbapi.com/?i=${imdbID}&apikey=564727fa`

    let request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        let detail = JSON.parse(this.responseText)
        movieDetailsDIV.innerHTML = `<h2>${detail.Title}</h2>`
    })

    request.open('GET', movieDetailsUrl)
    request.send()
}

function displayMovies(movies) {

    const movieItems = movies.map((movie) => {
        return `<li>${movie.Title} - ${movie.imdbID}</li>
    <img src = ${movie.Poster}/>
    <button onclick = 'getMovieDetails("${movie.imdbID}")'>Get Details</button>
    `
    })
    movieListUL.innerHTML = movieItems.join('')
}

getMovies(function (movies) {
    displayMovies(movies)
})





// http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa