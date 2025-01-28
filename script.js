const target = document.getElementById('target');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
let score = 0;
let timeLeft = 10;
let timer;

function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    target.style.position = 'absolute';
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}

function updateScore() {
    score++;
    scoreDisplay.textContent = score;
    moveButton();
}

function startGame() {
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    moveButton();

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert(`Temps écoulé! Votre score est de ${score}.`);
            target.style.display = 'none';
        }
    }, 1000);
}

target.addEventListener('click', updateScore);
startGame();