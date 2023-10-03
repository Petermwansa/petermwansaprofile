
// ==================== The code for the navbar ================ 

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navLink = document.querySelector('.nav-links .link');



    // to toggle the nav 
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // to animate the links 
        navLinks.forEach ((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .8}s`;
            }
        })
        //the burger aniamation 
        burger.classList.toggle('toggle');
    })




}




// // ================================== for the scroll reveaL ==========================================

// ScrollReveal({ 
//     reset: false,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home-content, .heading', { origin: 500 });
// ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-content h1, .about-img' , { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-content' , { origin: 'right' });


// ================================== typed js ==========================================

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})



//SCROLLER SECTION
upwards = () => {
    window.addEventListener('scroll', function(){
        var scroll = document.querySelector('.scrollTop');
        scroll.classList.toggle("active", window.scrollY > 500 )
    })
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}



upwards();
navSlide();