const TOGGLE_BTN = document.querySelector('.navbar__toggle__btn');
const MENU = document.querySelector('.navbar__menu');
const ICONS = document.querySelector('.navbar__icons');

TOGGLE_BTN.addEventListener('click', ()=>{
    MENU.classList.toggle('active');
    ICONS.classList.toggle('active');
})