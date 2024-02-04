//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav__links');
const navRight = document.querySelector('#nav__right');
const brand = document.querySelector('#brand');

hamburger.addEventListener('click', function () {
hamburger.classList.toggle('hamburger-active');
brand.classList.toggle('brand-active');
navMenu.classList.toggle('hidden');
navRight.classList.toggle('hidden');
});