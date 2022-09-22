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
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const links = document.querySelectorAll('a[href="#"]');

links.forEach( l => {
    l.addEventListener('click', e => {
        e.preventDefault();
        console.log('click offer');
        fbq('track', 'Lead');
        location.href
    })
})

