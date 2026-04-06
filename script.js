// පළමුව හදවත් පාවෙන ඇනිමේෂන් එකතු කරමු
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    0% { transform: translateY(0); opacity: 1;}
    100% { transform: translateY(-100vh); opacity: 0;}
}`;
document.head.appendChild(style);

// හදවත් පාවෙන ශ්‍රිතය
function createFloatingHearts(count = 10) {
    for (let i = 0; i < count; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.bottom = "-20px";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heart.style.opacity = Math.random() * 0.7 + 0.3;
        heart.style.pointerEvents = "none";
        heart.style.animation = "floatUp 3s linear forwards";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
}

// Magic Button එක (මුල් එක)
document.getElementById("magicBtn").addEventListener("click", function() {
    const msgDiv = document.getElementById("heartMsg");
    msgDiv.innerHTML = "💖 ඔයා මගේ හිත ස්පර්ශ කළා... 💖<br>✨ මැණිකේ, ඔයාට ස්තුතියි ✨";
    msgDiv.style.opacity = "1";
    createFloatingHearts(10);
    setTimeout(() => {
        if (msgDiv.style.opacity !== "0") {
            msgDiv.style.opacity = "0.8";
        }
    }, 4000);
});

// කාඩ් තුන සඳහා ක්ලික් ඉවෙන්ට්
const cards = document.querySelectorAll(".card");

// සඳ කාඩ් එක
cards[0].addEventListener("click", () => {
    const msgDiv = document.getElementById("heartMsg");
    msgDiv.innerHTML = "🌙 සඳ එළියේ... ඔයාගේ සිහින සැබෑ වේවා! ✨";
    msgDiv.style.opacity = "1";
    createFloatingHearts(5);
    setTimeout(() => msgDiv.style.opacity = "0.8", 3000);
});

// තරු කාඩ් එක
cards[1].addEventListener("click", () => {
    const msgDiv = document.getElementById("heartMsg");
    msgDiv.innerHTML = "⭐ තරුවක් ඉල්ලන්න... ඔයාගේ ආසාව ඉටු වේවා! 💫";
    msgDiv.style.opacity = "1";
    createFloatingHearts(7);
    setTimeout(() => msgDiv.style.opacity = "0.8", 3000);
});

// මැණික කාඩ් එක
cards[2].addEventListener("click", () => {
    const msgDiv = document.getElementById("heartMsg");
    msgDiv.innerHTML = "💎 මැණිකේ... ඔයාගේ හදවත ලෝකෙන්ම ලස්සන හදවත වේවා! 💖";
    msgDiv.style.opacity = "1";
    createFloatingHearts(12);
    setTimeout(() => msgDiv.style.opacity = "0.8", 3000);
});