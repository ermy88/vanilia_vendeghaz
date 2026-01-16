// SNOWFALL
export function snowFall(snowflakes) {

    // Creat snowflake button

    const span = document.createElement('span');
    span.classList.add('snowFall');
    span.id = 'snowFall';

    const icon = document.createElement('i');
    icon.classList.add('fa-regular', 'fa-snowflake');

    span.appendChild(icon);

    document.body.appendChild(span);

    // Create snow

    const snow = document.createElement('div');
    snow.classList.add('snowOff');

    const snowBtn = document.getElementById('snowFall');
    snowBtn.addEventListener('click', () => {

        snow.classList.toggle('snowOff');
        snow.classList.toggle('snow')
    });


    for (let i = 0; i <= snowflakes; i++) {
        const snowflake = document.createElement('span');
        snowflake.innerHTML = '&#10054';
        snow.appendChild(snowflake);
    }

    document.body.appendChild(snow);
}



