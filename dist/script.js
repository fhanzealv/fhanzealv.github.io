//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav__links');

hamburger.addEventListener('click', function () {
hamburger.classList.toggle('hamburger-active');
navMenu.classList.toggle('hidden');
});