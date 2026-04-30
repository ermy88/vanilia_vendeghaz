

export function createNavbar() {

  // ===== header =====
  const header = document.createElement('header');

  // ===== nav =====
  const nav = document.createElement('nav');
  nav.className = 'navbar navbar-expand-xxl col-12 col-md-12';

  // ===== toggler =====
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

  // ===== collapse =====
  const collapse = document.createElement('div');
  collapse.className = 'collapse navbar-collapse';
  collapse.id = 'navbarNavDropdown';

  // ===== ul =====
  const ul = document.createElement('ul');
  ul.className = 'navbar-nav';

  // ===== logo =====
  const logoLi = document.createElement('li');
  logoLi.className = 'nav-list-item';

  const mainLogo = document.createElement('a');
  mainLogo.className = 'mainLogo';
  mainLogo.href = 'index.html';

  const mainLogoImg = document.createElement('img');
  mainLogoImg.src = 'images/logo.jpg';
  mainLogoImg.alt = 'Vanília Vendégház';
  mainLogoImg.title = 'www.vaniliavendeghaz.hu';

  mainLogo.appendChild(mainLogoImg);
  logoLi.appendChild(mainLogo);
  ul.appendChild(logoLi);

  // ===== Kezdőlap =====
  ul.appendChild(createSimpleLi('Kezdőlap', 'index.html', true));

  // ===== Apartmanok dropdown =====
  ul.appendChild(createDropdown(
    'Apartmanok',
    [
      ['Emelet', 'upstair.html'],
      ['Földszint', 'ground.html'],
      ['Garden', 'garden.html'],
    ]
  ));

  // ===== Galéria =====
  ul.appendChild(createSimpleLi('Galéria', 'gallery.html'));

  // ===== Szolgáltatások =====
  ul.appendChild(createSimpleLi('Szolgáltatások', 'services.html'));

  // ===== Programok =====
  ul.appendChild(createDropdown(
    'Programok / Látnivalók',
    [
      ['Gombaházak', 'sights.html#gombahazak'],
      ['Kisvasút', 'sights.html#kisvasut'],
      ['Kilátó - Miskó István sétány', 'sights.html#kilato'],
      ['Tanösvény', 'sights.html#tanosveny'],
      ['Termálfürdő', 'sights.html#termal'],
      ['Szabadstrand', 'sights.html#strand'],
    ],
    true
  ));

  // ===== Információk =====
  ul.appendChild(createDropdown(
    'Információk',
    [
      ['Házirend', 'info.html#rules'],
      ['Térkép', 'info.html#gmap'],
      ['Panaszkezelési tájékoztató', 'info.html#complaint'],
      ['Adatkezelési tájékoztató', 'info.html#adatk'],
    ],
    true,
    true
  ));

  // ===== Árak / Foglalás =====
  const priceLi = document.createElement('li');
  priceLi.className = 'reservation nav-list-item';

  const priceA = document.createElement('a');
  priceA.className = 'cinzel nav-link btn-res-animation text-center';
  priceA.href = 'prices.html';
  priceA.textContent = 'Árak/Foglalás';

  priceLi.appendChild(priceA);
  ul.appendChild(priceLi);

  // ===== social =====
  const socialDiv = document.createElement('div');
  socialDiv.className = 'd-flex justify-content-evenly gap-4 py-2 pt-lg-2';

  [
    ['facebook', 'https://www.facebook.com/profile.php?id=61577007959763', 'fa-facebook'],
    ['tiktok', 'https://www.tiktok.com/@vanlia.vendghz', 'fa-tiktok'],
    ['messenger', 'https://m.me/61577007959763', 'fa-facebook-messenger'],
  ].forEach(([cls, href, icon]) => {
    const li = document.createElement('li');
    li.className = 'nav-list-item';

    const a = document.createElement('a');
    a.className = `text nav-link ${cls}`;
    a.href = href;
    a.target = '_blank';

    const i = document.createElement('i');
    i.className = `fa-brands ${icon}`;

    a.appendChild(i);
    li.appendChild(a);
    socialDiv.appendChild(li);
  });

  ul.appendChild(socialDiv);

  // ===== assemble =====
  collapse.appendChild(ul);
  nav.append(toggler, collapse);
  header.appendChild(nav);
  document.body.prepend(header);


  // ===== helper functions =====
  function createSimpleLi(text, href, current = false) {
    const li = document.createElement('li');
    li.className = 'nav-list-item';

    const a = document.createElement('a');
    a.className = 'cinzel text nav-link';
    a.href = href;
    a.textContent = text;

    if (current) a.setAttribute('aria-current', 'page');

    li.appendChild(a);
    return li;
  }

  function createDropdown(dd_title, dd_items, center = false, nowrap = false) {
    const li = document.createElement('li');
    li.className = 'nav-list-item dropdown';

    const a = document.createElement('a');
    a.className = `cinzel text nav-link${nowrap ? ' text-nowrap' : ''}`;
    a.href = '#';
    a.setAttribute('role', 'button');
    a.setAttribute('data-bs-toggle', 'dropdown');
    a.setAttribute('aria-expanded', 'false');
    a.textContent = dd_title;

    const centerDiv = document.createElement('div');
    centerDiv.className = `dropdown-center${center ? ' text-center' : ''}`;

    const ul = document.createElement('ul');
    ul.className = 'dropdown-menu' + (center ? ' text-center' : '');

    dd_items.forEach(([text, href]) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.className = 'dropdown-item cinzel text-center';
      link.href = href;
      link.textContent = text;
      li.appendChild(link);
      ul.appendChild(li);
    });

    centerDiv.appendChild(ul);
    li.append(a, centerDiv);
    return li;
  }
}
