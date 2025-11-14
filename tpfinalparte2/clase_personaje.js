class Personaje {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = 40;
    this.vel = 40;
  }

  dibujar() {
    image(pj, this.x, this.y, this.tam, this.tam);
  }

  mover(tecla) { //Movimientos del personaje con las flechas.
     if (tecla === UP_ARROW) {
      this.y -= this.vel;
    } else if (tecla === DOWN_ARROW) {
      this.y += this.vel;
    } else if (tecla === LEFT_ARROW) {
      this.x -= this.vel;
    } else if (tecla === RIGHT_ARROW) {
      this.x += this.vel;
    }

    // Limitar el personaje dentro de la pantalla
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x > width - this.tam) {
      this.x = width - this.tam;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y > height - this.tam) {
      this.y = height - this.tam;
    }
  }
}
