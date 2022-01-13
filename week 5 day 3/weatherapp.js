const submitCityForm = document.getElementById('submitCityForm')
const weatherInfoDiv = document.getElementById('weatherInfoDiv')
const cityTextBox = document.getElementById('cityTextBox')
const weatherByLocationButton = document.getElementById('weatherByLocationButton')

submitCityForm.addEventListener("submit", function (event) {
    event.preventDefault()
    getWeather(displayWeather)
})

function getWeather(weatherFetched) {
    let city = cityTextBox.value
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=de4c345a71ff9ee2e4fb39d1762476c4&units=imperial')
        .then((response) => {
            return response.json()
        }).then((result) => {
            weatherFetched(result)
        }).catch(() => {
            weatherInfoDiv.innerHTML = `<h3>Error: No weather data found for ${city}.</h3>`
        })
}

function displayWeather(weatherDisplayed) {
    weatherInfoDiv.innerHTML = `<h3>${weatherDisplayed.name}</h3>
    <p>${weatherDisplayed.weather[0].main}, ${weatherDisplayed.weather[0].description}</p>
    <p>Temperature: ${parseInt(weatherDisplayed.main.temp)}°</p>
    <p>Feels like: ${parseInt(weatherDisplayed.main.feels_like)}°</p>
    <p>High: ${parseInt(weatherDisplayed.main.temp_max)}°</p>
    <p>Low: ${parseInt(weatherDisplayed.main.temp_min)}°</p>
    <p>Pressure: ${weatherDisplayed.main.pressure}</p>`
}

function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        getWeatherByLocation(position.coords.latitude, position.coords.longitude)
    })
}

function getWeatherByLocation(latitude, longitude) {
    console.log(latitude)
    console.log(longitude)
    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=de4c345a71ff9ee2e4fb39d1762476c4&units=imperial`
    fetch(weatherURL)
        .then((response) => {
            return response.json()
        }).then((result) => {
            displayWeather(result)
        }).catch(() => {
            weatherInfoDiv.innerHTML = `<h3>Error: No weather data found for your location.</h3>`
        })
}

weatherByLocationButton.addEventListener("click", function () {
    getLocation()
})
