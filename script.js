const hamburger = document.querySelector('#hamburger');
const navlink = document.querySelector('#navlink');

hamburger.addEventListener('click', function(){
    navlink.classList.toggle('block');

});
