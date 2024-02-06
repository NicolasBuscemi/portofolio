(function () {
    const homeH1 = document.querySelector('#home h1');
    homeH1.addEventListener('mouseover', function () {
        homeH1.textContent = 'BUSCEMI';
    });

    homeH1.addEventListener('mouseout', function () {
        homeH1.textContent = 'NICOLAS';
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
})();

function toggleNightMode() {
    const body = document.body;
    body.classList.toggle('night-mode');

    const nightModeToggle = document.getElementById('nightModeToggle');
    nightModeToggle.textContent = body.classList.contains('night-mode') ? 'LIGHT' : 'NIGHT';
}


const customCursor = document.getElementById('custom-cursor');

// Function to update the position of the custom cursor
function updateCustomCursorPosition(event) {
    customCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}

// Add event listener to update custom cursor position on mouse movement
document.addEventListener('mousemove', updateCustomCursorPosition);