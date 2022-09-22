// Vendors
import Swiper, { Navigation } from 'swiper';
import * as bootstrap from 'bootstrap';
import 'lazysizes';

// Custom
import * as flsFunctions from './modules/functions.js'


// INIT
flsFunctions.isWebp();

const gallerySlider = new Swiper('.gallery-slider', {
    modules: [Navigation],
    navigation: {
        nextEl: '.gallery-slider .swiper-button-next',
        prevEl: '.gallery-slider .swiper-button-prev',
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 16
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 16
        }
    }
});

const gallerySmallSlider = new Swiper('.gallery-small-slider', {
    modules: [Navigation],
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        200: {
            slidesPerView: 3,
            spaceBetween: 16
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 16
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 16
        }
    }
});

const reviewSlider = new Swiper('.review-slider', {
    modules: [Navigation],
    // loop: true,
    navigation: {
        nextEl: '.review-slider .swiper-button-next',
        prevEl: '.review-slider .swiper-button-prev',
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 16
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 16
        }
    }
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

(function init100vh() {
    function setHeight() {
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);
})();

(function () {
    const links = document.querySelectorAll('a[href="#"]');
    links.forEach(l => {
        l.addEventListener('click', e => {
            e.preventDefault();
            location.href = './register.html'
        })
    })
})();


(function sendForm() {
    const form = document.querySelector('#main-form');
    if (!form) return;

    const preloader = document.querySelector('.preloader');
    const inputs = form.querySelectorAll('*');
    
    form.addEventListener('submit', e => {
        e.preventDefault();

        inputs.forEach(el => {
            el.setAttribute('disbled', 'disbled');
        })
        preloader.classList.add('active');

        setTimeout(() => {
            location.href = './success.html'
        }, 800);
    })
})();

