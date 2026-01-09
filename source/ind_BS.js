
// Navbar Presets

document.getElementsByTagName('nav')[0].style.backgroundColor = '#cabfb369';
document.getElementsByTagName('nav')[0].style.width = '99%';
document.getElementsByTagName('nav')[0].style.borderRadius = '10px 10px 20px 20px';

//Navbar position -> top 0, background change if scrolled

window.onscroll = function navTop0() {

    if (document.documentElement.scrollTop > 1) {
        document.getElementsByTagName('nav')[0].style.backgroundColor = '#cabfb3';
        document.getElementsByTagName('nav')[0].style.top = '0vh';
        document.getElementsByTagName('nav')[0].style.transition = '500ms';
        document.getElementsByTagName('nav')[0].style.borderRadius = '10px 10px 25% 25%';
    } else {
        document.getElementsByTagName('nav')[0].style.backgroundImage = 'none';
        document.getElementsByTagName('nav')[0].style.backgroundColor = '#cabfb369';
        document.getElementsByTagName('nav')[0].style.top = '1vh';
        document.getElementsByTagName('nav')[0].style.borderRadius = '10px 10px 20px 20px';

    }
    // Scroll-top-btn

    if (document.documentElement.scrollTop > 100) {
        document.getElementsByClassName('scroll-top-btn')[0].style.display = 'inline';
    }
    else {
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
    document.getElementsByClassName('navbar-toggler-icon')[0].style.border = '3px #644c3a solid';
    document.getElementsByClassName('navbar-toggler-icon')[0].style.borderRadius = '50% / 20%';
    document.getElementsByClassName('navbar-toggler-icon')[0].style.transition = '300ms';
});

// reserve animation
if (document.getElementsByClassName('reserve')[0]) {


    document.getElementsByClassName('reserve')[0].addEventListener('mouseenter', () => {

        document.getElementsByClassName('reserve')[0].style.scale = '1.1';
        document.getElementsByClassName('reserve')[0].style.transition = '350ms';

    });
}
if (document.getElementsByClassName('reserve')[0]) {

    document.getElementsByClassName('reserve')[0].addEventListener('mouseleave', () => {

        document.getElementsByClassName('reserve')[0].style.scale = '1';
        document.getElementsByClassName('reserve')[0].style.transition = '500ms';
    });
}

// dinamikus évszám a foglalási oldalon

if (document.getElementsByTagName('h1')[0].innerText === "Árlista") {
    document.getElementsByTagName('h1')[0].innerHTML =
        `Vanília Vendégház Árlista <br> ${new Date().getFullYear()}`;
}

// NTAK nr. under logo in footer

let ntakNumber = document.createElement('li');
ntakNumber.innerHTML = 'NTAK reg.szám: <br> MA25117534'
ntakNumber = document.getElementById('footer').appendChild(ntakNumber).classList.add("list-item");

// Footer panaszkezelési tájékoztató elem

let complainHandling = document.createElement('li');
let complainHandlingRef = document.createElement('a');

complainHandlingRef.setAttribute('href', 'info.html');
complainHandlingRef.innerText = 'Panaszkezelési tájékoztató';

document.getElementById('footer').children[2].insertAdjacentElement('afterend', complainHandling)
document.getElementById('footer').children[3].classList.add('list-item');

complainHandling.appendChild(complainHandlingRef);


// actual date in footer

function monthToString() {



    if (document.querySelector(".footerText")) {

        let month = new Date().getMonth()
        switch (month) {

            case 0: month = 'Január';
                break;
            case 1: month = 'Február';
                break;
            case 2: month = 'Március';
                break;
            case 3: month = 'Április';
                break;
            case 4: month = 'Május';
                break;
            case 5: month = 'Június';
                break;
            case 6: month = 'Július';
                break;
            case 7: month = 'Augusztus';
                break;
            case 8: month = 'Szeptember';
                break;
            case 9: month = 'Október';
                break;
            case 10: month = 'November';
                break;
            case 11: month = 'December';
                break;

        }

        document.querySelector('.footerText').innerHTML =
            `&copy; Vanília Vendégház. Bencsik Szabolcs | ${new Date().getFullYear()}. ${month} ${new Date().getDate()}.`;

    }
};
monthToString();

// Date check on reserve form

const errorColor = '#a50000ff';
const defaultTextColor = '#644c3a';

function onSubmit() {
    let isFormValid = false;


    dateValidation() ? isFormValid = true : isFormValid = false;
    // nameValidation();
    // emailValidation();

};

function dateValidation() {

    const dateStart = new Date(document.querySelectorAll('input')[3].value);
    const dateEnd = new Date(document.querySelectorAll('input')[4].value);
    const datePresent = new Date();

    if (dateStart > datePresent && dateEnd > datePresent && dateStart < dateEnd) {
        document.querySelector('small').style.transition = '500ms';
        document.querySelector('small').innerText = '';
        document.querySelector('small').style.color = defaultTextColor;
        isFormValid = true;
    } else if (dateEnd < dateStart) {
        document.querySelector('small').style.transition = '500ms';
        document.querySelector('small').innerText =
            'A távozás korábbra van megadva, mint az érkezés.';
        document.querySelector('small').style.color = errorColor;
        isFormValid = false;
    } else {
        document.querySelector('small').style.transition = '500ms';
        document.querySelector('small').innerText = 'Helytelen dátum!';
        document.querySelector('small').style.color = errorColor;
        isFormValid = false;
    }
    return isFormValid;
};

function nameValidation() {

    nameInputField = document.querySelectorAll('input')[0].value;
    // console.log(nameInputField);

    if (/\d/.test(nameInputField.toLowerCase())) {
        console.log('számok');
    } else {
        console.log("ok");
    }
}





