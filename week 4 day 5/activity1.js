
const firstNameTextBox = document.getElementById("firstNameTextBox")
const lastNameTextBox = document.getElementById("lastNameTextBox")
const emailTextBox = document.getElementById("emailTextBox")
const passwordTextBox = document.getElementById("passwordTextBox")
const submitButton = document.getElementById("submitButton")
const userInfoForm = document.getElementById("userInfoForm")
const userInfoHeading = document.getElementById("userInfoHeading")

submitButton.addEventListener("click", function () {

    let isValid = userInfoForm.checkValidity()
    if (!isValid) {
        return
    }
})
