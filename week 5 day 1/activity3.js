const dogPhotoButton = document.getElementById("dogPhotoButton")
const photoHeading = document.getElementById("photoHeading")

dogPhotoButton.addEventListener("click", function () {
    let request = new XMLHttpRequest()
    request.addEventListener("load", function () {
        console.log(this.responseText)
        let result = JSON.parse(this.responseText)
        console.log(result.message)
        photoHeading.innerHTML = `<img src="${result.message}">`
    })

    request.open('GET', 'https://dog.ceo/api/breeds/image/random')
    request.send()
})