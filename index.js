const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("high-score");

document.addEventListener("keydown", jump);
function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(() => {
            dino.classList.remove("jump");
        }, 300);
    }
}

setInterval(() => {
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        gameOver();
    }
}, 10);

function randomizeCactus() {
    const randomLeft = Math.random() * 100; 
    const randomDelay = Math.random() * 2000 + 1000; 

    cactus.style.left = `${randomLeft}%`;

    setTimeout(randomizeCactus, randomDelay);
}
randomizeCactus();

let score = 0;
let highScore = 0;

function startGame() {
    setInterval(() => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }, 1000);
}