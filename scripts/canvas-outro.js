let c = document.querySelector('#canvas-intro');
let cx = c.getContext('2d');

function draw() {
  for (var i = 0; i < c.width; i++) {
    for (var j = 0; j < c.width; j++) {
      cx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      cx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
  setTimeout(() => draw(), 50 );
}
draw();