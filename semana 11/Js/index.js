var c = document.getElementById("c");
var ctx = c.getContext("2d");
var cw = c.width = 500;
var ch = c.height = 500;
var cx = cw / 2,
  cy = ch / 2;
var frames = -30;
var delta = 0;
ctx.lineWidth = .2;
ctx.strokeStyle = "#025060";
ctx.fillStyle = "rgba(255,248,220,.1)";
var I = 7.50;
var a = 10.5 * I;
var b = 7 * I;
var rotation = 3;
var H = 100;

function Draw() {
  frames++
  var h = H * Math.sin(frames * Math.PI / 180);
  rotation = frames / 20;
  ctx.fillRect(0, 0, cw, ch);
  ctx.beginPath();
  for (var T = 0; T < 360 * b; T += b * 7) {
    var t = T * Math.PI / 180;
    var x = cx + (a - b) * Math.cos(t) + h * Math.cos(rotation + (a - b) / b * t);
    var y = cy + (a - b) * Math.sin(t) - h * Math.sin(rotation + (a - b) / b * t);
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();
  requestId = window.requestAnimationFrame(Draw);
}

function start() {
  requestId = window.requestAnimationFrame(Draw);
  stopped = false;
}

function stopAnim() {
  if (requestId) {
    window.cancelAnimationFrame(requestId);
  }
  stopped = true;
}
window.addEventListener("load", function() {
  start();
}, false);
c.addEventListener("click", function() {
  (stopped == true) ? start(): stopAnim();
}, false)