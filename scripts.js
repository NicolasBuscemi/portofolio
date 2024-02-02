document.querySelector('#home h1').addEventListener('mouseover', function () {
    this.textContent = 'BUSCEMI';
});

document.querySelector('#home h1').addEventListener('mouseout', function () {
    this.textContent = 'NICOLAS';
});



document.addEventListener('DOMContentLoaded', function () {
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
});