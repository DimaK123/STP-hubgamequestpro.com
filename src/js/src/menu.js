// Переменные
const header = document.querySelector('.header');
const navButton = document.querySelector('.header__burger-menu');
const closeMenuButton = document.querySelector('.menu__close-button');
const page = document.querySelector('.page');
const pageMenu = document.querySelector('.page__menu');
const arrOfNavLinks = document.querySelectorAll('.nav__link');

// Вычисления
const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

// Функции
function toggleMenu() {
  pageMenu.classList.toggle('page__menu--active');
}

function updateHeaderHeight() {
  const headerHeight = header.offsetHeight;

  page.style.scrollPaddingTop = `${headerHeight}px`;

  return headerHeight;
}

let headerHeight = updateHeaderHeight();

// События
navButton.addEventListener('click', toggleMenu);

closeMenuButton.addEventListener('click', toggleMenu);

arrOfNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (isSmallScreen) {
      toggleMenu();
    }
  });
});

window.addEventListener('resize', () => {
  headerHeight = updateHeaderHeight();
});