
//Navbar position -> top 0, background change

window.onscroll = function navTop0() {

    if (document.documentElement.scrollTop > 5) {
        document.getElementsByTagName('nav')[0].classList = 'header-sticky navBG navbar navbar-expand-lg col-12';

    } else if (document.documentElement.scrollTop < 5) {
        document.getElementsByTagName('nav')[0].classList = 'navBG navbar navbar-expand-lg col-12';
    }
};

// Collapsed navbar esetén a nav button-re kattintva megváltozik a nav háttere


    document.getElementsByTagName('nav')[0].addEventListener('click', changeColor);

    function changeColor(){
        if(document.getElementsByTagName('nav')[0].classList == 'navBG navbar navbar-expand-lg col-12'){
            document.getElementsByTagName('nav')[0].classList = 'header-sticky navBG navbar navbar-expand-lg col-12';
        }else{
            document.getElementsByTagName('nav')[0].classList = 'header-sticky navbar navbar-expand-lg col-12';
            }
    }

