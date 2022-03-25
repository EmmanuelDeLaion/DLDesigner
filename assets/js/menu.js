const menu = document.querySelector('.menu');

const btn = menu.querySelector('.nav-tgl');
btn.addEventListener('click', evt => {
    menu.classList.toggle('active');
});


const navlinks = document.querySelectorAll('.nav-link-menu');

navlinks.forEach(nav => {
    nav.addEventListener('click', function() {
        menu.classList.remove('active');
    });
});