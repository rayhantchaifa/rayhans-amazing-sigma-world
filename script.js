document.getElementById('magicButton').addEventListener('click', () => {
    alert("✨ Welcome to the ultimate Sigma world, ruled by the one and only Rayhan! ✨");
});

document.getElementById('quoteButton').addEventListener('click', () => {
    const quotes = [
        "Sigma grindset activated. Keep winning.",
        "The strongest alone becomes the king.",
        "In Rayhan’s presence, greatness follows.",
        "Legends don't chase, they attract."
    ];
    alert(quotes[Math.floor(Math.random() * quotes.length)]);
});

document.getElementById('themeButton').addEventListener('click', () => {
    document.body.style.background = `hsl(${Math.random() * 360}, 80%, 80%)`;
});

let score = 0;
document.getElementById('clicker').addEventListener('click', () => {
    score += 10;
    document.getElementById('score').innerText = score;
});

// Easter Egg: Secret Game
document.getElementById('hiddenGameButton').addEventListener('click', () => {
    let secretMessage = "🔥 You've unlocked the secret Sigma mode! You're officially GOATED!";
    alert(secretMessage);
});
