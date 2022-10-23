const hamburgerBtnElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');

mainElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
});

hamburgerBtnElement.addEventListener('click', event => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
});
