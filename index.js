let userChips = 0
let userName = ""
const form = document.getElementById('f1')
const submitButton = document.getElementById('proceed')

function handleFormSubmit(event) {
    event.preventDefault()

    userName = (document.getElementById("uname")).value
    userChips = parseInt((document.getElementById("chips")).value)
    console.log(userName,userChips)
    if (userName !== '' && userChips > 0) {
        const url = `index.html?name=${encodeURIComponent(userName)}&chips=${userChips}`;
        window.location.href = url
    } else {
        alert('Please enter a valid name and number of chips.')
    }
    
    nameInput.value = ''
    chipsInput.value = ''
}
submitButton.addEventListener('click', handleFormSubmit)