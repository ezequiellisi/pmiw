class AutoDePolicia {
  constructor() {
    this.tam = 60;
    this.x = random(100, width - 100 - this.tam); // en la calle
    this.y = random(-200, -50);
    this.velY = random(2, 5);
  }

  dibujar() {
    fill(0, 0, 255);
    rect(this.x, this.y, this.tam/2, this.tam);
  }

  mover() {
    this.y += this.velY;

    if (this.y > height) {
      this.y = random(-200, -50);
      this.x = random(100, width - 100 - this.tam);
      this.velY = random(2, 5);
    }
  }

  colision(personaje) {
    return (this.x < personaje.x + personaje.tam && this.x + this.tam > personaje.x && this.y < personaje.y + personaje.tam && this.y + this.tam / 2 > personaje.y);
  }
}
