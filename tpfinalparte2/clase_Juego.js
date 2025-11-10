class Juego {
  constructor() {
    this.personaje = new Personaje(50, height / 2); // empieza en vereda izquierda
    this.vidas = 3;
    this.tiempo = 1800;
    this.estado = "jugando";

    this.autos = [];
    for (let i = 0; i < 10; i++) {
      this.autos[i] = new AutoDePolicia();
    }

    this.obstaculos = [];
    for (let i = 0; i < 5; i++) {
      this.obstaculos[i] = new Obstaculo();
    }
  }

  actualizar() {
    if (this.estado !== "jugando") {
      this.tiempo--;
      this.personaje.mover();
    }


    for (let i = 0; i < this.autos.length; i++) {
      this.autos[i].mover();

      if (this.autos[i].colision(this.personaje)) {
        this.vidas--;

        // Si choca un auto, reinicia su ubicación
        this.autos[i].y = random(-200, -50);
        this.autos[i].x = random(100, width - 100 - this.autos[i].tam);

        if (this.vidas <= 0) {
          this.estado = "perdido";
        }
      }
    }

    for (let i = 0; i < this.obstaculos.length; i++) {
      if (this.obstaculos[i].colision(this.personaje)) {
        this.personaje.y += 10; 
      }
    }

    //detectar victoria
    if (this.personaje.x + this.personaje.tam >= width - 100 && this.vidas > 0) {
      this.estado = "ganado";
    }

    // pierde por tiempo
    if (this.tiempo <= 0) {
      this.estado = "perdido";
    }
  }

  dibujar() {
    background(50);

    //Vereda izquierda
    fill(100);
    rect(0, 0, 100, height);

    //Calle
    fill(30);
    rect(100, 0, width - 200, height);

    //Vereda derecha
    fill(100, 255, 100);
    rect(width - 100, 0, 100, height);

    // DATOS DE JUGADOR
    fill(255);
    textSize(20);
    text("Vidas: " + this.vidas, 20, 30);
    text("Tiempo: " + int(this.tiempo / 60), width - 140, 30);

    
    this.personaje.dibujar();

    for (let i = 0; i < this.autos.length; i++) {
      this.autos[i].dibujar();
    }

    for (let i = 0; i < this.obstaculos.length; i++) {
      this.obstaculos[i].dibujar();
    }

    // Pantallas finales
    if (this.estado === "ganado") {
      fill(0, 255, 0);
      textSize(40);
      textAlign(CENTER);
      text("¡GANASTE!", width / 2, height / 2);
    }

    if (this.estado === "perdido") {
      fill(255, 0, 0);
      textSize(40);
      textAlign(CENTER);
      text("¡PERDISTE!", width / 2, height / 2);
    }
  }

  reiniciar() {
    this.personaje = new Personaje(50, height / 2);
    this.vidas = 3;
    this.tiempo = 30 * 60;
    this.estado = "jugando";

    for (let i = 0; i < this.autos.length; i++) {
      this.autos[i] = new AutoDePolicia();
    }

    for (let i = 0; i < this.obstaculos.length; i++) {
      this.obstaculos[i] = new Obstaculo();
    }
  }
}
