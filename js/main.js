var elBtn = document.querySelector(".header__btn");
var elMenu = document.querySelector('.header__menu');

elBtn.addEventListener('click', function() {
    elMenu.classList.toggle('menu--open')
})