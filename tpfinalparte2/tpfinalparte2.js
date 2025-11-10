let juego;

function setup() {
  createCanvas(800, 600);
  juego = new Juego();
}

function draw() {
  juego.actualizar();
  juego.dibujar();
}

function keyPressed() {
  if (key === ' ') {
    juego.reiniciar();
  } else {
    juego.personaje.mover(keyCode);
  }
}
