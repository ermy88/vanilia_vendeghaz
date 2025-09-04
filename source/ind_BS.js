
//Navbar position -> top 0, background change if scrolled

window.onscroll = function navTop0() {

    if (document.documentElement.scrollTop > 0) {
        document.getElementsByTagName('nav')[0].classList = 'header-sticky navBG navbar navbar-expand-lg col-12';
        document.getElementsByTagName('nav')[0].style.backgroundColor = '#cabfb3';
        document.getElementsByTagName('nav')[0].style.top = '0vh';
        document.getElementsByTagName('nav')[0].style.transition = '250ms';
    } else {
        document.getElementsByTagName('nav')[0].style.backgroundColor = '#cabfb369';
        document.getElementsByTagName('nav')[0].style.top = '1vh';
        document.getElementsByTagName('nav')[0].style.borderRadius = '0rem';

    }
    // Scroll-top-btn
    if (document.documentElement.scrollTop > 300){
        document.getElementsByClassName('scroll-top-btn')[0].style.display = 'inline';
        
    }
    if (document.documentElement.scrollTop < 300){
        document.getElementsByClassName('scroll-top-btn')[0].style.transition = '500ms';
        document.getElementsByClassName('scroll-top-btn')[0].style.display = 'none';
    }
};

// Mobilnézet, navbar


document.getElementsByClassName('navbar')[0].addEventListener('mouseenter', () => {
    document.getElementsByTagName('nav')[0].style.transition = '1000ms';
    document.getElementsByTagName('nav')[0].style.backgroundColor = '#cabfb3';
    document.getElementsByClassName('navbar-toggler-icon')[0].style.borderRadius = '50%';
    document.getElementsByClassName('navbar-toggler-icon')[0].style.transition = '300ms';
});

document.getElementsByClassName('navbar')[0].addEventListener('mouseleave', () => {
    document.getElementsByClassName('navbar-toggler-icon')[0].style.border = '2px #644c3a solid';
    document.getElementsByClassName('navbar-toggler-icon')[0].style.borderRadius = '50% / 20%';
    document.getElementsByClassName('navbar-toggler-icon')[0].style.transition = '300ms';
});








