const hamBtn = document.querySelector('.ham-btn')
const menu = document.querySelector('.menu')
const hamIcon = document.querySelector('.ham-svg')
const closeHamIcon = document.querySelector('.close-svg')

hamBtn.addEventListener('click', () => {
    menu.classList.toggle('invisible')
    menu.classList.toggle('menu-shown')
    hamIcon.classList.toggle('no-display')
    closeHamIcon.classList.toggle('no-display')
})