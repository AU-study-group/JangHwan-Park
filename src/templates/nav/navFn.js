export function toggleMenu() {
    const MENU = document.querySelector('.navbar__menu');
    const ICONS = document.querySelector('.navbar__icons');
    MENU.classList.toggle('active');
    ICONS.classList.toggle('active');
}