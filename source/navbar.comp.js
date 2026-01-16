
export function createNavbar(){

// header
const header = document.createElement('header');

// nav
const nav = document.createElement('nav');
nav.className = 'navbar navbar-expand-lg col-12 col-md-12';

// container-fluid
const container = document.createElement('div');
container.className = 'container-fluid justify-content-evenly';

// logo
const logoA = document.createElement('a');
logoA.className = 'mainLogo navbar-brand';
logoA.href = 'index.html';

const logoImg = document.createElement('img');
logoImg.src = 'images/logo.jpg';
logoImg.alt = 'Vanília Vendégház';
logoImg.title = 'www.vaniliavendeghaz.hu';

logoA.appendChild(logoImg);

// toggler
const toggler = document.createElement('button');
toggler.className = 'navbar-toggler';
toggler.type = 'button';
toggler.setAttribute('data-bs-toggle', 'collapse');
toggler.setAttribute('data-bs-target', '#navbarNavDropdown');
toggler.setAttribute('aria-controls', 'navbarNavDropdown');
toggler.setAttribute('aria-expanded', 'false');
toggler.setAttribute('aria-label', 'Toggle navigation');

const togglerIcon = document.createElement('span');
togglerIcon.className = 'navbar-toggler-icon';
toggler.appendChild(togglerIcon);

// collapse
const collapse = document.createElement('div');
collapse.className = 'collapse navbar-collapse';
collapse.id = 'navbarNavDropdown';

// ul
const ul = document.createElement('ul');
ul.className = 'navbar-nav';

// helper: simple li
function simpleItem(text, href, extraClass = '') {
  const li = document.createElement('li');
  li.className = `nav-item ${extraClass}`.trim();

  const a = document.createElement('a');
  a.className = 'cinzel text nav-link';
  a.href = href;
  a.textContent = text;

  li.appendChild(a);
  return li;
}

// Kezdőlap
ul.appendChild(simpleItem('Kezdőlap', 'index.html'));

// Apartmanok
const aptLi = document.createElement('li');
aptLi.className = 'nav-item dropdown';

const aptA = document.createElement('a');
aptA.className = 'cinzel text nav-link';
aptA.href = '#';
aptA.setAttribute('role', 'button');
aptA.setAttribute('data-bs-toggle', 'dropdown');
aptA.setAttribute('aria-expanded', 'false');
aptA.textContent = 'Apartmanok';

const aptCenter = document.createElement('div');
aptCenter.className = 'dropdown-center';

const aptUl = document.createElement('ul');
aptUl.className = 'dropdown-menu text-center';

[
  ['Emelet', 'upstair.html'],
  ['Földszint', 'ground.html'],
  ['Garden', 'garden.html'],
].forEach(([t, h]) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.className = 'dropdown-item cinzel text-center';
  a.href = h;
  a.textContent = t;
  li.appendChild(a);
  aptUl.appendChild(li);
});

aptCenter.appendChild(aptUl);
aptLi.append(aptA, aptCenter);
ul.appendChild(aptLi);

// Galéria
ul.appendChild(simpleItem('Galéria', 'gallery.html'));

// Szolgáltatások
ul.appendChild(simpleItem('Szolgáltatások', 'services.html'));

// Programok / Látnivalók
const progLi = document.createElement('li');
progLi.className = 'nav-item dropdown';

const progA = document.createElement('a');
progA.className = 'cinzel text nav-link';
progA.href = '';
progA.setAttribute('role', 'button');
progA.setAttribute('data-bs-toggle', 'dropdown');
progA.setAttribute('aria-expanded', 'false');
progA.textContent = 'Programok / Látnivalók';

const progCenter = document.createElement('div');
progCenter.className = 'dropdown-center text-center';

const progUl = document.createElement('ul');
progUl.className = 'dropdown-menu';

[
  ['Gombaházak', 'sights.html#gombahazak'],
  ['Kisvasút', 'sights.html#kisvasut'],
  ['Kilátó - Miskó István sétány', 'sights.html#kilato'],
  ['Tanösvény', 'sights.html#tanosveny'],
  ['Termálfürdő', 'sights.html#termal'],
  ['Szabadstrand', 'sights.html#strand'],
].forEach(([t, h]) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.className = 'dropdown-item cinzel text-center';
  a.href = h;
  a.textContent = t;
  li.appendChild(a);
  progUl.appendChild(li);
});

progCenter.appendChild(progUl);
progLi.append(progA, progCenter);
ul.appendChild(progLi);

// Információk
const infoLi = document.createElement('li');
infoLi.className = 'nav-item dropdown';

const infoA = document.createElement('a');
infoA.className = 'cinzel text nav-link text-nowrap';
infoA.href = '';
infoA.setAttribute('role', 'button');
infoA.setAttribute('data-bs-toggle', 'dropdown');
infoA.setAttribute('aria-expanded', 'false');
infoA.textContent = 'Információk';

const infoCenter = document.createElement('div');
infoCenter.className = 'dropdown-center text-center';

const infoUl = document.createElement('ul');
infoUl.className = 'dropdown-menu';

[
  ['Házirend', 'info.html#rules'],
  ['Térkép', 'info.html#gmap'],
  ['Panaszkezelési tájékoztató', 'info.html#complaint'],
  ['Adatkezelési tájékoztató', 'info.html#adatk'],
].forEach(([t, h]) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.className = 'dropdown-item cinzel text-center';
  a.href = h;
  a.textContent = t;
  li.appendChild(a);
  infoUl.appendChild(li);
});

infoCenter.appendChild(infoUl);
infoLi.append(infoA, infoCenter);
ul.appendChild(infoLi);

// Árak / Foglalás
const priceLi = document.createElement('li');
priceLi.className = 'reservation nav-item';

const priceA = document.createElement('a');
priceA.className = 'cinzel nav-link btn-res-animation';
priceA.href = 'prices.html';
priceA.textContent = 'Árak/Foglalás';

priceLi.appendChild(priceA);
ul.appendChild(priceLi);

// social icons wrapper
const socialDiv = document.createElement('div');
socialDiv.className = 'd-flex justify-content-around my-3 gap-lg-2 gap-5';

[
  ['facebook', 'https://www.facebook.com/profile.php?id=61577007959763', 'fa-facebook'],
  ['tiktok', 'https://www.tiktok.com/@vanlia.vendghz', 'fa-tiktok'],
  ['messenger', 'https://m.me/61577007959763', 'fa-facebook-messenger'],
].forEach(([cls, link, icon]) => {
  const li = document.createElement('li');
  li.className = 'nav-item';

  const a = document.createElement('a');
  a.className = `text nav-link ${cls}`;
  a.href = link;
  a.target = '_blank';

  const i = document.createElement('i');
  i.className = `fa-brands ${icon}`;

  a.appendChild(i);
  li.appendChild(a);
  socialDiv.appendChild(li);
});

ul.appendChild(socialDiv);

// assemble
collapse.appendChild(ul);
container.append(logoA, toggler, collapse);
nav.appendChild(container);
header.appendChild(nav);
document.body.prepend(header);

}