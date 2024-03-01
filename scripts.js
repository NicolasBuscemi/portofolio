(function () {
    const homeH1 = document.querySelector('#home h1');
    homeH1.addEventListener('mouseover', function () {
        homeH1.classList.add('new-text'); // Add class to trigger animation
        homeH1.textContent = 'BUSCEMI'; // Change text immediately
    });

    homeH1.addEventListener('mouseout', function () {
        homeH1.classList.remove('new-text'); // Remove class to reset animation
        homeH1.textContent = 'NICOLAS'; // Change text immediately
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




let text = document.querySelector(".abouttext")
let letters = text.innerHTML.split("")
text.innerHTML = ""; // setting it empty
let filteredLetters = letters.filter(letter => letter != " ")

letters.forEach(letter => {
    text.innerHTML += "<span>" + letter + "</span>"
});


const r = 30; //radius for semibold text
const r2 = 50; //radius for medium text


const letterFunc = (letterElement) => {
    letterElement.onmouseenter = () => {
        letterElement.classList.add("strong");
    }
    letterElement.onmouseleave = () => letterElement.classList.remove("strong");
}
text.querySelectorAll("span").forEach(letterFunc)


document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    text.querySelectorAll("span").forEach((letterElement) => {
        let letterPos = {};
        letterPos.x = letterElement.getBoundingClientRect().x + 6
        letterPos.y = letterElement.getBoundingClientRect().y + 80
        if ((letterPos.x >= (mouseX - r)) && (letterPos.x <= (mouseX + r)) && (letterPos.y >= (mouseY - r)) && (letterPos.y <= (mouseY + r))) {
            letterElement.classList.add("medium");
            letterElement.classList.remove("light")
        } else if ((letterPos.x >= (mouseX - r2)) && (letterPos.x <= (mouseX + r2)) && (letterPos.y >= (mouseY - r2)) && (letterPos.y <= (mouseY + r2))) {
            letterElement.classList.add("light")
            letterElement.classList.remove("medium")
        } else {
            letterElement.classList.remove("medium")
            letterElement.classList.remove("light")
        }
    })
}



document.getElementById('openMenu').addEventListener('click', function () {
    document.getElementById('menuOverlay').classList.toggle('show');
    document.body.style.overflow = 'hidden'; // Disable scrolling on the main content
});

document.getElementById('closeMenu').addEventListener('click', function () {
    document.getElementById('menuOverlay').classList.remove('show');
    document.body.style.overflow = ''; // Enable scrolling on the main content
});

// Get menu links
const aboutLink = document.getElementById('aboutLink');
const portfolioLink = document.getElementById('portfolioLink');
const contactLink = document.getElementById('contactLink');

// Add click event listeners to menu links
aboutLink.addEventListener('click', toggleMenuOverlay);
portfolioLink.addEventListener('click', toggleMenuOverlay);
contactLink.addEventListener('click', toggleMenuOverlay);

// Function to toggle menu overlay
function toggleMenuOverlay() {
    const menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.classList.toggle('show');
}