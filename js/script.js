/*============icon navbar============== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};


/*============scroll nav bar============== */

let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlink.forEach(link => {
                link.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };

    });

    /*============sticky nav bar============== */

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /*============remove scroll navbar when click navbar link============== */
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

/*============scroll reveal ============== */

ScrollReveal({
    // reset: true,
    distance: '70px',
    duration: 1500,
    delay: 150

});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*============typed js ============== */

const typed = new Typed('.multi-text', {
    strings: ["Front-End Developer.", "Gaming Video Creator.", "Content Creator."],
    typeSpeed: 90,
    loop: true


});
