const cookiesBlock = document.querySelector('.accept-cookies');
const acceptButtons = document.querySelectorAll('.accept-cookies__action-button');

acceptButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cookiesBlock.classList.add('accept-cookies--fade-out');

    setTimeout(() => {
    cookiesBlock.style.display = 'none';
    }, 500);
  });
});