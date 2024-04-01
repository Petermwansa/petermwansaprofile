// ==================== The code for the navbar ================ 

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navLink= document.querySelectorAll('.nav-link');
    const menu = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    
    // const navLink = document.querySelector('.nav-links .link');


    // classList.toggle('nav-active');
    // })

    burger.onclick = function () {

 


        
        // to animate the links 
        if(!burger.classList.contains('toggle') && !nav.classList.contains('nav-active')) {
            navLinks.forEach ((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .8}s`;
                }
            })
        } 
        else if(burger.classList.contains('toggle') && nav.classList.contains('nav-active')) {
            navLinks.forEach ((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .8}s`;
                }
            })
        }
        
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");

    }





























    // document.onclick = function (e) {
    //     if(e.target.classList == 'nav-link') {
    //         nav.classList.remove('nav-active');
    //         burger.classList.remove('toggle');
    //     }
    // }


        // else if (burger.classList.contains('toggle') && nav.classList.contains('nav-active')){
        //     navLinks.forEach ((link, index) => {
        //         if (link.style.animation) {
        //             link.style.animation = '';
        //         } else {
        //             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .8}s`;
        //         }
        //     })
        // }

        // //the burger aniamation 
        // burger.classList.toggle('toggle');



        // if(burger.classList.contains('toggle') && nav.classList.contains('nav-active')) {
        //     nav.classList.add('nav-active');
        //     burger.classList.add('toggle');
        // }




}






// ========================= start of the remove nav ======================

const removeNav = () => {
    var nav1 = document.querySelectorAll('.nav-link'),
    body = document.body;

    nav1.addEventListener('click', function(e) {
        body.className = body.className? '' : 'with_nav' 
        e.preventDefault();
    });
}

// ========================= end of the remove nav  ======================








// ========================= start of the sections animations ======================


const animator = () => {
    let sections = document.querySelectorAll('section');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 300;
            let height = sec.offsetHeight;
    
            if (top >= offset && top < offset + height) {
                sec.classList.add("show__animate");
            } 
            
            // if you want to use repeating animation on scroll 
            else {
                sec.classList.remove('show__animate')
            }
        })
    }
}



// ========================= end of the sections animations ========================



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
    strings: ['Web Developer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})





//THIS ONE IS FOR THE PRELOADER 

load = () => {
    var loader = document.getElementById("preloader");
    window.addEventListener("load", function () {
        loader.style.display = "none"
    }, 20000);
};







//BELOW FOR THE CURSOR

cursor = () => {
    var cursor = document.getElementById("cursor");

    document.onmousemove = function(e) {
        cursor.style.left = (e.pageX - 25) + "px";
        cursor.style.top = (e.pageY - 25) + "px";
        cursor.style.display = "block";
    }
}








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


cursor();
animator();
navSlide();
load();
upwards();

console.log("Success");
