const music = document.getElementById("music");

function start() {
  const name = document.getElementById("nameInput").value || "Dear Friend";

  document.getElementById("title").style.display = "none";
  document.getElementById("nameInput").style.display = "none";

  document.querySelector("button").style.display = "none";

  document.getElementById("wish").innerHTML =
    `Dear <b>${name}</b>,<br><br>
     May your life sparkle with joy, love, and success ✨<br>
     Have a magical Christmas 🎅🎄`;

  document.getElementById("message").style.display = "block";

  music.play();
}

/* ❄️ Snow Animation */
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

for (let i = 0; i < 100; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 1,
    d: Math.random() + 1
  });
}

function drawSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < snowflakes.length; i++) {
    let f = snowflakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveSnow();
}

let angle = 0;
function moveSnow() {
  angle += 0.01;
  for (let i = 0; i < snowflakes.length; i++) {
    let f = snowflakes[i];
    f.y += Math.pow(f.d, 2) + 1;
    f.x += Math.sin(angle) * 2;

    if (f.y > canvas.height) {
      snowflakes[i] = {
        x: Math.random() * canvas.width,
        y: 0,
        r: f.r,
        d: f.d
      };
    }
  }
}

setInterval(drawSnow, 30);
