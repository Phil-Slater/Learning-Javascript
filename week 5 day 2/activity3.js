
const deleteButton = document.getElementById('deleteButton')
const userDiv = document.getElementById('userDiv')


let request = new XMLHttpRequest()
request.addEventListener('load', function () {
    console.log(this.responseText)
    result = JSON.parse(this.responseText)
    console.log(result.data)
    userDiv.innerHTML = `<p>${result.data.id}</p>
    <p>${result.data.email}</p>
    <p>${result.data.first_name}</p>`
})

request.open('GET', 'https://reqres.in/api/users/2')
request.send()


deleteButton.addEventListener("click", function () {

    let request = new XMLHttpRequest()
    request.open('DELETE', 'https://reqres.in/api/users/2')
    request.send()
    userDiv.innerHTML = ''
})