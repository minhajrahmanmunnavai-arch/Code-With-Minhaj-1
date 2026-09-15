const menuToggle = document.querySelector('.menu-toggle');

const navMenu = document.querySelector('.nav-menu');

function closeMenu() {

    navMenu.classList.remove('is-open');

    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.querySelector('.sr-only').textContent = 'Open menu';

}

menuToggle.addEventListener('click', () => {

    const isOpen = navMenu.classList.toggle('is-open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));

    menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Close menu' : 'Open menu';

});

navMenu.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', closeMenu);

});

document.addEventListener('click', (event) => {

    if (!event.target.closest('.navbar')) {

        closeMenu();

    }

});


const signUpBtn = document.getElementById("signUpBtn");
const signUpPopup = document.getElementById("signUpPopup");
const closeBtn = document.getElementById("closeBtn");

signUpBtn.onclick = () => {
    signUpPopup.style.display = "flex";
    console.log("buttonl clicked")
};

closeBtn.onclick = () => {
    signUpPopup.style.display = "none";
};