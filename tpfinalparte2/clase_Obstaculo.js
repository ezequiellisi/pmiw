class Obstaculo {
  constructor() {
    this.tam = 50;
    this.x = random(100, width - 100 - this.tam); // solo en la calle
    this.y = random(0, height - this.tam);
  }

  dibujar() {
    fill(200, 150, 0);
    ellipse(this.x, this.y, this.tam, this.tam);
  }

  colision(personaje) {
    return dist(this.x, this.y, personaje.x, personaje.y) < 30;
  }
}
