// adding x symbol 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// removing icons 
// let header = document.querySelector('header');
// header.classList.toggle('sticky',window.scrollY > 100);
// menuIcon.classList.remove('bx-x');
// navbar.classList.remove('active');
ScrollReveal({
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .Education-container, .Projects-container, .skills-container, .Certifications-container, .Internships-container, .Contact-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


