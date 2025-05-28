// Messages for Interactive Section
const messages = [
  "You are the sunshine in my life ☀️",
  "Your smile melts my heart every time 💖",
  "I fall in love with you more every single day 💘",
  "Thank you for being YOU – amazing, kind, and beautiful 💐",
  "Today is all yours. Happy Birthday, my everything 🎂"
];

let messageIndex = 0;

function nextMessage() {
  const messageBox = document.getElementById("message");
  messageBox.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
}

// Letter Typing Effect
const letter = `My love, today is a celebration of the amazing person you are.
Every moment with you is a gift, and I feel so lucky to walk through life by your side.
You make everything brighter, happier, and full of magic.
I love you more with each passing day. 💖

Forever yours 💕`;

let i = 0;
function typeLetter() {
  if (i < letter.length) {
    document.getElementById("typed-text").textContent += letter.charAt(i);
    i++;
    setTimeout(typeLetter, 40);
  }
}

// Slideshow
const images = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg","images/photo4.jpg","images/photo5.jpg","images/photo6.jpg","images/photo7.jpg"];
let slideIndex = 0;

function showSlide() {
  const slide = document.getElementById("slide");
  slide.style.opacity = 0;
  setTimeout(() => {
    slide.src = images[slideIndex];
    slide.style.opacity = 1;
    slideIndex = (slideIndex + 1) % images.length;
  }, 800);
}

setInterval(showSlide, 3000);

// Confetti Animation Setup
const confettiCanvas = document.getElementById("confetti");
const confettiCtx = confettiCanvas.getContext("2d");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

const confettiPieces = [];
const confettiCount = 300;

for (let i = 0; i < confettiCount; i++) {
  confettiPieces.push({
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height - confettiCanvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * confettiCount,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    tilt: Math.random() * 10 - 5
  });
}

function drawConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach((c, i) => {
    confettiCtx.beginPath();
    confettiCtx.lineWidth = c.r;
    confettiCtx.strokeStyle = c.color;
    confettiCtx.moveTo(c.x + c.tilt + c.r / 2, c.y);
    confettiCtx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
    confettiCtx.stroke();
  });
  updateConfetti();
}

function updateConfetti() {
  confettiPieces.forEach((c, i) => {
    c.y += Math.cos(c.d) + 1 + c.r / 2;
    c.x += Math.sin(c.d);
    if (c.y > confettiCanvas.height) {
      confettiPieces[i] = {
        x: Math.random() * confettiCanvas.width,
        y: -10,
        r: c.r,
        d: c.d,
        color: c.color,
        tilt: c.tilt
      };
    }
  });
}

function animateConfetti() {
  drawConfetti();
  requestAnimationFrame(animateConfetti);
}

animateConfetti();

// Popup Functions
function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

// Initialize typing effect
typeLetter();
