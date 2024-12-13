document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.header__menu-btn');
    const menu = document.getElementById('mainNav');

    menuBtn.addEventListener('click', function() {
        const isOpen = menu.classList.toggle('menu--open');
        menuBtn.setAttribute('aria-expanded', isOpen);
    });
});