const navbar = document.querySelector('.navbar');
const content = document.querySelector('.content');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const screenHeight = window.innerHeight - 100;

    if (scrollY >= screenHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});