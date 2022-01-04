
let btnSubmit = document.getElementById("btnSubmit")
let pendingTasks = document.getElementById("pendingTasks")
let completedTasks = document.getElementById("completedTasks")
let taskBox = document.getElementById("taskBox")

btnSubmit.addEventListener("click", function () {
    let task = taskBox.value
    let taskDiv = document.createElement("div")
    taskDiv.setAttribute("class", "task-flex")
    let divP = document.createElement("span")

    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    checkBox.addEventListener("change", function () {
        if (this.checked) {
            completedTasks.appendChild(this.parentElement)
        } else {
            pendingTasks.appendChild(this.parentElement)
        }
    })

    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"
    deleteButton.setAttribute("class", "btn btn-danger btn-sm")
    deleteButton.addEventListener("click", function () {
        try {
            pendingTasks.removeChild(this.parentElement)
        }
        catch {
            completedTasks.removeChild(this.parentElement)
        }
    })

    divP.innerHTML = task
    taskDiv.appendChild(checkBox)
    taskDiv.appendChild(divP)
    taskDiv.appendChild(deleteButton)
    pendingTasks.appendChild(taskDiv)

})