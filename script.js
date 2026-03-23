
const btnSubmit = document.querySelector('.btn')
const ticket = document.querySelector('.main-ticket')
const form = document.querySelector('.main-form')
const fullName = document.querySelectorAll('.full-name')
const emailAdress = document.querySelector('.email-adress')
const githubUsername = document.querySelector('.user-github')


form.addEventListener('submit', (event) =>{
    event.preventDefault()

    form.classList.add('card-none')
    ticket.classList.remove('card-none')
    const inputName = document.getElementById('nome')
    const inputEmail = document.getElementById('email')
    const inputGithub = document.getElementById('gitName')
    fullName.forEach(name => {
        name.innerHTML = inputName.value
    })
    emailAdress.innerHTML = inputEmail.value
    githubUsername.innerHTML = inputGithub.value
})