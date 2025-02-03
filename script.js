const targetDate = new Date("February 14, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "C'est la Saint-Valentin ! ❤️🌹💏";
        let link = document.getElementById("love-message-link");
        link.classList.remove("disabled");
        link.classList.add("enabled");
        link.removeAttribute("onclick");
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.querySelector(".hearts-container").appendChild(heart);
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    setTimeout(() => { heart.remove(); }, 5000);
}

setInterval(createHeart, 300);