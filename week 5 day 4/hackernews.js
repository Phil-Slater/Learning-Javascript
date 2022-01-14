const newsDiv = document.getElementById('newsDiv')

window.onload = (() => {
    getStoryIds(getURLs)
})

function getStoryIds(idsFetched) {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then((response) => {
            return response.json()
        }).then((result) => {
            idsFetched(result) // passes an **array** of IDs to getStoryIds, which passes it to getURLs
        })
}

function getURLs(urlsMap) {
    let mappedURLs = urlsMap.map((id) => {
        return `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    })
    fetchStories(mappedURLs) // calls fetchStories, passing in array of URLs
}

function fetchStories(urlsArray) {
    urlsArray.forEach((url) => {
        fetch(url)
            .then((response) => {
                return response.json()
            }).then((result) => {
                displayStories(result)
            }).catch((reject) => {
                console.log(reject)
            })
    })
}

function displayStories(stories) {
    newsDiv.insertAdjacentHTML('beforeend', `<a href="${stories.url}" target="_blank"><h3>${stories.title}</h3></a><p>Posted by: ${stories.by}</p><p>Date posted: ${convertTime(stories.time)}</p><p>Score: ${stories.score}</p><hr>`)
}

function convertTime(timestamp) {
    let time = new Date(timestamp * 1000)
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let year = time.getFullYear()
    let month = months[time.getMonth()]
    let date = time.getDate()
    let fullDate = `${month} ${date}, ${year}`
    return fullDate
}