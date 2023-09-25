// ====================================== the toggle icon ==============================


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}



// ====================================== scroll sections active link ==============================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a ')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

// ================================== sticky navbar ==========================================
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

// ================================== remove toggle and navbar when link is clicked ==========================================

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

};


// ================================== for the scroll reveaL ==========================================

ScrollReveal({ 
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 500 });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img' , { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content' , { origin: 'right' });


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