const menuButton = document.querySelector('.menu');
const nav = document.querySelector('nav');

menuButton.setAttribute('aria-expanded', 'false');

menuButton.addEventListener('click', toggleNav);
nav.addEventListener('click', toggleNav);

function toggleNav(event) {
    if (event.target.tagName !== 'A' && event.target.tagName !== 'BUTTON') {
        return;
    }
    const nav = document.querySelector('nav');
    if (!nav) {
        return;
    }

    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

    // set next state for button
    menuButton.setAttribute('aria-expanded', isOpen ? 'false' : 'true');

    if (isOpen) {
        nav.removeAttribute('style');
        return;
    }

    nav.style.display = 'flex';
}