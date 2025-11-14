class Obstaculo {
  constructor() {
    this.tam = 50;
    this.x = random(100, width - 100 - this.tam); // solo en la calle
    this.y = random(0, height - this.tam);
  }

  dibujar() {
    image(pozo, this.x, this.y, this.tam, this.tam);
  }

  colision(personaje) { //Se aplicó la misma lógica utilizada en el método colision(personaje) de la clase AutoDePolicia
    return (this.x < personaje.x + personaje.tam && this.x + this.tam > personaje.x && this.y < personaje.y + personaje.tam && this.y + this.tam > personaje.y);
  }
}
