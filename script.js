let score = 0;
let autoClickers = 0;
let multiplier = 1;

document.getElementById('clicker').addEventListener('click', () => {
    score += multiplier;
    document.getElementById('score').innerText = score;
    playClickSound();
    triggerAnimation();
});

function playClickSound() {
    let audio = new Audio('assets/sounds/click.mp3');
    audio.volume = 0.5;
    audio.play();
}

function triggerAnimation() {
    let btn = document.getElementById('clicker');
    btn.style.transform = "scale(1.1)";
    setTimeout(() => btn.style.transform = "scale(1)", 200);
}
