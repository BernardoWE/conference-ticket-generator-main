
const btnSubmit = document.querySelector('.btn')
const ticket = document.querySelector('.main-ticket')
const form = document.querySelector('.main-form')
const fullName = document.querySelector('.full-name')
const emailAdress = document.querySelector('.email-adress')


form.addEventListener('submit', (event) =>{
    event.preventDefault()

    form.classList.add('card-none')
    ticket.classList.remove('card-none')
    const inputName = document.getElementById('nome')
    const inputEmail = document.getElementById('email')
    fullName.innerHTML = inputName.value
    emailAdress.innerHTML = inputEmail.value
})