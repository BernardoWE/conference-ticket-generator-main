
const btnSubmit = document.querySelector('.btn')
const ticket = document.querySelector('.main-ticket')
const form = document.querySelector('.main-form')
const fullName = document.querySelector('.full-name')
console.log(fullName)


form.addEventListener('submit', (event) =>{
    event.preventDefault()

    form.classList.add('card-none')
    ticket.classList.remove('card-none')
    const inputName = document.getElementById('nome')
    console.log(inputName.value)
    fullName.innerHTML = inputName.value
    
})