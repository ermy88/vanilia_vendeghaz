
//Navbar position -> top 0, background change

window.onscroll = function navTop0() {

    if (document.documentElement.scrollTop > 5) {
        document.getElementsByTagName('nav')[0].classList = 'header-sticky navBG navbar navbar-expand-lg col-12';
        
    } else if (document.documentElement.scrollTop < 5) {
        document.getElementsByTagName('nav')[0].classList = 'navBG navbar navbar-expand-lg col-12';
    }
};

// Kezdőlap tartalma

document.getElementsByTagName('main')[0].style.top = 0;

console.log();