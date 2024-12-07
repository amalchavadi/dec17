window.onload = function () {
    const scrapPaper = document.getElementById('note');
    const confettiContainer = document.getElementById('confetti');
    const music = document.getElementById('music');

    // Typewriter effect for the birthday note
    const birthdayNote = `Dear Love,

    May your birthday bring as much happiness 
    as you bring to everyone around you. 
    You’re my sunshine and my everything.

    Happy Birthday, darling! ❤️`;

    setTimeout(() => {
        typewriterEffect(scrapPaper, birthdayNote, 50);
        generateConfetti();
        music.play();
    }, 1000);
};

// Typewriter effect function
function typewriterEffect(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Generate confetti
function generateConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
        confettiContainer.appendChild(confetti);

        // Remove confetti after animation
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

// Get a random color for confetti
function getRandomColor() {
    const colors = ['#ff6f61', '#ffcc00', '#6fff61', '#61a6ff', '#ff61cf'];
    return colors[Math.floor(Math.random() * colors.length)];
}
