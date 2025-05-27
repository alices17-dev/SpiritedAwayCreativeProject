const canvas = document.getElementById("revealCanvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "color-image.jpg";

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let mouseX = 0;
let mouseY = 0;
let radius = 120;

canvas.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  draw();
});

image.onload = () => draw();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, radius, 0, Math.PI * 2, false);
  ctx.clip();
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.restore();
}
