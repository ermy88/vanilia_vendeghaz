import { createNavbar } from "../source/navbar.comp.js";
import { snowFall } from "./snowFall.comp.js";
import "./gallery.modal.js";
import "./services-scrollShadow.comp.js";

// Colors
const color_Ash = '#cabfb3';
const color_AshA = '#cabfb3dd';
const color_AshA1 = '#cabfb3b9';
const color_AshA2 = '#cabfb369';
const color_Birch = '#393121';
const color_Millbrook = '#644c3a';
const color_MillbrookA = '#644c3ab9';
const color_YellowMetal = '#70643f';
const color_YellowMetalA = '#70643fc6';
const color_Vanilla = '#F3E5AB';
const color_ice = '#70edfd';
const color_thinIce = ' #baf7ff79';


// Navbar Presets //* navbar.comp.js
const pageData = document.body.dataset.page;

if (pageData !== 'home') {
    createNavbar();
}

// NAVBAR Dropdown menu item to center

const ddNum = document.getElementsByClassName('ddTitle').length;

for (let el = 0; el < ddNum; el++) {
    const dd = document.getElementsByClassName('ddTitle')[el];
    dd.style.textAlign = 'center';
}

// Background CSS selection
(function () {
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';

    switch (pageData) {

        case 'inner upstair':
            cssLink.href = 'styles/bg-upstair.css';
            break;
        case 'inner ground':
            cssLink.href = 'styles/bg-ground.css';
            break;
        case 'inner garden':
            cssLink.href = 'styles/bg-garden.css';
            break;
        case 'inner gallery':
            cssLink.href = 'styles/bg-gallery.css';
            break;
        default:
            cssLink.href = 'styles/bg-base.css';
    }

    document.head.appendChild(cssLink);
})();

// NAV color

document.getElementsByTagName('nav')[0].style.backgroundColor = '#cabfb369';
document.getElementsByTagName('nav')[0].style.borderRadius = '10px 10px 20px 20px';

//Navbar position -> top 0, background change if scrolled

window.onscroll = function navTop0(navLogo, navbar) {
    navLogo = document.querySelector('.mainLogo');
    navbar = document.getElementsByTagName('nav')[0];

    if (document.documentElement.scrollTop > 0) {
        navbar.style.backgroundColor = '#cabfb3';
        navbar.style.top = '0vh';
        navbar.style.transition = '300ms';
        navLogo.style.paddingBottom = '15px';
        window.innerWidth > 992
            ? navbar.style.borderRadius = '0px 0px 25% 25%'
            : null;

    } else {
        navbar.style.backgroundImage = 'none';
        navbar.style.backgroundColor = '#cabfb369';
        navbar.style.top = '1vh';
        navbar.style.borderRadius = '10px 10px 20px 20px';
        navLogo.style.paddingBlock = '10px';

    }
    // Scroll-top-btn

    if (document.documentElement.scrollTop > 100) {
        document.getElementsByClassName('scroll-top-btn')[0].style.display = 'inline';
    } else {
        document.getElementsByClassName('scroll-top-btn')[0].style.display = 'none';
    }
};

//  NAVBAR - toggler icon

document.getElementsByClassName('navbar')[0].addEventListener('mouseenter', (togglerIcon, navBg) => {
    togglerIcon = document.querySelector('.navbar-toggler-icon');

    navBg = document.getElementsByTagName('nav')[0];
    navBg.style.transition = '1000ms';
    navBg.style.backgroundColor = '#cabfb3';
    togglerIcon.style.borderRadius = '50%';
    togglerIcon.style.transition = '300ms';

});

document.getElementsByClassName('navbar')[0].addEventListener('mouseleave', (togglerIcon) => {
    togglerIcon = document.querySelector('.navbar-toggler-icon');

    togglerIcon.style.border = '3px #644c3a solid';
    togglerIcon.style.borderRadius = '50% / 20%';
    togglerIcon.style.transition = '300ms';

});

// Rotate mainLogo when window loaded

(function () {

    window.addEventListener('load', (logo, togglerIcon) => {
        setTimeout(() => {
            logo = document.querySelector('.mainLogo');
            togglerIcon = document.querySelector('.navbar-toggler-icon');

            logo.style.display = 'block';
            logo.style.transition = '1000ms';
            logo.style.transform = 'rotate(360deg)';

            togglerIcon.style.borderRadius = '50%';
            togglerIcon.style.transition = '1000ms';
            togglerIcon.style.transform = 'rotate(360deg)';

        }, 1000);
    });
})();

// RESERVE ANIMATION

if (document.getElementsByClassName('reserve')[0]) {

    document.getElementsByClassName('reserve')[0].addEventListener('mouseenter', () => {

        document.getElementsByClassName('reserve')[0].style.scale = '1.05';
        document.getElementsByClassName('reserve')[0].style.transition = '350ms';
    });
}

if (document.getElementsByClassName('reserve')[0]) {

    document.getElementsByClassName('reserve')[0].addEventListener('mouseleave', () => {

        document.getElementsByClassName('reserve')[0].style.scale = '1';
        document.getElementsByClassName('reserve')[0].style.transition = '500ms';
    });
}

// dinamikus évszám a foglalási oldalon H1

if (pageData === 'inner prices') {

    document.getElementsByTagName('h1')[0].innerHTML =
        `Vanília Vendégház Árlista <br> ${new Date().getFullYear()}`;
}

// NTAK num in footer

let ntakNumber = document.createElement('li');
ntakNumber.innerHTML = 'NTAK reg.szám: <br> MA25117534'
ntakNumber = document.getElementById('footer').appendChild(ntakNumber).classList.add("list-item");

// Footer panaszkezelési tájékoztató

let complainHandling = document.createElement('li');
let complainHandlingRef = document.createElement('a');

complainHandlingRef.setAttribute('href', 'info.html');
complainHandlingRef.innerText = 'Panaszkezelési tájékoztató';

document.getElementById('footer').children[2].insertAdjacentElement('afterend', complainHandling)
document.getElementById('footer').children[3].classList.add('list-item');

complainHandling.appendChild(complainHandlingRef);

// actual date in footer

function monthToString() {

    const monthName = ['január', 'február', 'március', 'április', 'május', 'június',
        'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];

    if (document.querySelector('.footerText')) {

        let month = new Date().getMonth();

        document.querySelector('.footerText').innerHTML =
            `&copy; Vanília Vendégház. Bencsik Szabolcs | 
            ${new Date().getFullYear()}. 
            ${monthName.slice(month, month + 1)} 
            ${new Date().getDate()}.`;
    }
};
monthToString();


// SOCIAL ICONS ANIMATION
// FACEBOOK
document.querySelector('.facebook').addEventListener('mouseenter', (fb) => {
    fb = document.querySelector('.facebook');
    fb.style.transform = 'rotate(360deg)';
    fb.style.transition = '500ms';
    fb.style.scale = 2;

});
document.querySelector('.facebook').addEventListener('mouseleave', (fb) => {
    fb = document.querySelector('.facebook');
    fb.style.transition = '1000ms';
    fb.style.transform = 'rotate(0deg)';
    fb.style.scale = 1;

});
// TIKTOK
document.querySelector('.tiktok').addEventListener('mouseenter', (tt) => {
    tt = document.querySelector('.tiktok');
    tt.style.transform = 'rotate(360deg)';
    tt.style.transition = '500ms';
    tt.style.scale = 2;
});
document.querySelector('.tiktok').addEventListener('mouseleave', (tt) => {
    tt = document.querySelector('.tiktok');
    tt.style.transition = '1000ms';
    tt.style.transform = 'rotate(0deg)';
    tt.style.scale = 1;

});
// MESSENGER
document.querySelector('.messenger').addEventListener('mouseenter', (msgr) => {
    msgr = document.querySelector('.messenger');
    msgr.style.transform = 'rotate(360deg)';
    msgr.style.transition = '500ms';
    msgr.style.scale = 2;
});
document.querySelector('.messenger').addEventListener('mouseleave', (msgr) => {
    msgr = document.querySelector('.messenger');
    msgr.style.transition = '1000ms';
    msgr.style.transform = 'rotate(0deg)';
    msgr.style.scale = 1;

});

// Snowflakes //* snowFall.comp.js
const screenWidth = window.innerWidth;
screenWidth > 900 ? snowFall(500) : snowFall(150);

// console.log('main.js running');




