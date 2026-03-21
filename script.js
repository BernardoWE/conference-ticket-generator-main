
const btnSubmit = document.querySelector('.btn')
const ticket = document.querySelector('.main-ticket')
const form = document.querySelector('.main-form')
console.log(btnSubmit)

btnSubmit.addEventListener('click', (event) =>{
    event.preventDefault()
    form.classList.add('card-none')
    ticket.classList.remove('card-none')
})