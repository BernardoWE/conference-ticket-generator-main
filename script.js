
const btnSubmit = document.querySelector('.btn')
const ticket = document.querySelector('.main-ticket')
const form = document.querySelector('.main-form')

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    const inputName = document.getElementById('nome')
    const inputEmail = document.getElementById('email')
    const inputGithub = document.getElementById('gitName')
    // fullName.forEach(name => {
    //     name.innerHTML = inputName.value
    // })
    document.querySelector('.full-name').innerHTML = inputName.value
    document.querySelector('.ticket-name').innerHTML = inputName.value
    document.querySelector('.email-adress').innerHTML = inputEmail.value
    document.querySelector('.user-github').textContent = inputGithub.value

    let hasError = false
    const erroName = document.querySelector('.erroName')
    if(inputName.value === ''){
        erroName.innerHTML = 'Please enter your name'
        hasError = true
    } else {
        erroName.innerHTML = ''
    }
    const erroEmail = document.querySelector('.erroEmail')
    if(inputEmail.value === ''){
        erroEmail.innerHTML = 'Please enter your email'
        hasError = true
    } else {
        erroEmail.innerHTML = ''
    }
    const erroGithub = document.querySelector('.erroGithub')
    if(inputGithub.value === ''){
        erroGithub.innerHTML = 'Please enter your GitHub username'
        hasError = true
    } else {
        erroGithub.innerHTML = ''
    }

    if(!hasError){
        form.classList.add('card-none')
        ticket.classList.remove('card-none')
    }

})