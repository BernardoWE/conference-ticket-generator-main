
const btnSubmit = document.querySelector('.btn')
const ticket = document.querySelector('.main-ticket')
const form = document.querySelector('.main-form')
// const fullName = document.querySelector('.full-name')
// const ticketName = document.querySelector('.ticket-name')
// const emailAdress = document.querySelector('.email-adress')
// const githubUsername = document.querySelector('.user-github')


/* form.addEventListener('submit', (event) =>{
    event.preventDefault()

    form.classList.add('card-none')
    ticket.classList.remove('card-none')
    const inputName = document.getElementById('nome')
    const inputEmail = document.getElementById('email')
    const inputGithub = document.getElementById('gitName')
    // fullName.forEach(name => {
    //     name.innerHTML = inputName.value
    // })
    fullName.innerHTML = inputName.value
    ticketName.innerHTML = inputName.value
    emailAdress.innerHTML = inputEmail.value
    githubUsername.textContent = inputGithub.value
}) */

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    form.classList.add('card-none')
    ticket.classList.remove('card-none')
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
})