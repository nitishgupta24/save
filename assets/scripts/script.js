const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if(window.scrollY > 10) {
        header.classList.add('float');
    } else {
        header.classList.remove('float');
    }
});

const nav = document.querySelector('nav');

function menu(mobile) {
    if(mobile.matches) {
        nav.addEventListener('click', function(e) {
            if(e.target.classList[2] == 'menu-button') {
                e.target.style.display = 'none';
                document.querySelector('.close-button').style.display = 'inherit';
                document.querySelector('.hamburger-menu').style.display = 'flex';
                document.querySelector('.hamburger-menu').style.animation = 'slideLeft .3s ease-out forwards'
                document.querySelector('nav ul').style.display = 'flex';
            }
            if(e.target.classList[2] == 'close-button') {
                e.target.style.display = 'none';
                document.querySelector('.menu-button').style.display = 'inherit';
                document.querySelector('.hamburger-menu').style.display = 'none';
                document.querySelector('nav ul').style.display = 'none';
            }
        
            if(e.target.tagName == 'A') {
                document.querySelector('.close-button').style.display = 'none';
                document.querySelector('.menu-button').style.display = 'inherit';
                document.querySelector('.hamburger-menu').style.display = 'none';
                document.querySelector('nav ul').style.display = 'none';     
            }
        });
    }
}

const mobile = window.matchMedia("(max-width: 1279px)");
menu(mobile);
mobile.addListener(menu);

const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownList = document.querySelector('.dropdown-list');

dropdownBtn.addEventListener('click', function(e) {
    dropdownList.classList.toggle('active');
});

window.addEventListener('click', function(e) {
    if (e.target != dropdownBtn) {
        if(dropdownList.classList.contains('active')) {
            dropdownList.classList.remove('active');
        }
    }
});
