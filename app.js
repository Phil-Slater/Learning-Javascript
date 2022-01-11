
const newsUL = document.getElementById("newsUL")
const sourcesDiv = document.getElementById("sourcesDiv")
const allNews = document.getElementById("allNews")

const sourcesList = sources.sources.map(function (source) {
    return `<option>${source.name}</option>`
})

sourcesDiv.innerHTML = sourcesList.join("")

sourcesDiv.addEventListener("change", function () {
    if (news.articles.length > 0) {
        const selectedSource = this.value
        console.log(selectedSource)
        const filteredSource = news.articles.filter(function (item) {
            return item.source.name == selectedSource
        })

        displayNews(filteredSource)
    } else {
        console.log("no items")
    }
}

)


function displayNews(newsToDisplay) {
    const newsList = newsToDisplay.map(function (item) {
        return `<li>
        <h4>${item.author}</h4>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        <a href="${item.url}">Link</a>
        <img src="${item.urlToImage}">
        <p>${item.publishedAt}</p>
        </li>`
    })
    newsUL.innerHTML = newsList.join(" ")
}

allNews.addEventListener("click", function () {
    displayNews(news.articles)
})