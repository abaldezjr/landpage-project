const menu = document.querySelector('.menu2');
const NavMenu = document.querySelector('.nav-menu2');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})
