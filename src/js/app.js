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
    // loop: true,
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
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// (function stickBtnToggle() {
//     const apperBtn = document.querySelector('.apper-btn');
//     const className = 'show';
//     const position = 1000;

//     if (!apperBtn) return;

//     function toggleFunc() {
//         if (scrollY >= position) apperBtn.classList.add(className);
//         else apperBtn.classList.remove(className);
//     }

//     toggleFunc();
//     window.addEventListener('scroll', toggleFunc);
// })();



