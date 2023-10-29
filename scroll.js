document.addEventListener('DOMContentLoaded', function () {
    const gameList = document.getElementById('game-list');

    gameList.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1); // Remove the '#' character
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
