import { toggleMenu } from '/src/templates/nav/navFn.js';

/* 요소가 모두 렌더링된 후에 코드 실행 */
document.addEventListener("DOMContentLoaded", () => {
    const TOGGLE_BTN = document.querySelector('.navbar__toggle__btn');
    TOGGLE_BTN.addEventListener('click', toggleMenu);
});