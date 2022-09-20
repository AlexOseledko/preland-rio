// Vendors
// import Swiper, { Navigation, Pagination } from 'swiper';
import * as Bootstrap from 'bootstrap';

// Custom
import * as flsFunctions from './modules/functions.js'


flsFunctions.isWebp();
// const swiper = new Swiper()


(function stickBtnToggle() {
    const apperBtn = document.querySelector('.apper-btn');
    const className = 'show';
    const position = 1000;

    if (!apperBtn) return;

    function toggleFunc() {
        if (scrollY >= position) apperBtn.classList.add(className);
        else apperBtn.classList.remove(className);
    }

    toggleFunc();
    window.addEventListener('scroll', toggleFunc);
})();




