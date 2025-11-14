class Juego {
  constructor() {
    //ESTADO DEL PROGRAMA
    this.estado = "inicio";

    //LLAMAMOS A LA CLASE PERSONAJE. COMO LOS AUTOS Y OBSTÁCULOS SERÁN MÁS DE UNO, DEFINIMOS UN ARREGLO PARA C/U.
    this.personaje = new Personaje(50, height / 2);
    this.autos = [];
    this.obstaculos = [];

    //DATOS NECESARIOS PARA EL JUGADOR
    this.vidas = 3;
    this.tiempo = 1800; // Son 30 segundos, pero como el programa corre a 60fps entonces tiempo = 1800.

    //DEFINIMOS LOS ARREGLOS PARA LOS AUTOS Y OBSTÁCULOS. ABRIMOS UN FOR PARA C/U Y LLAMAMOS A LA CLASE CORRESPONDIENTE.
    for (let i = 0; i < 7; i++) {
      this.autos[i] = new AutoDePolicia();
    }
    for (let i = 0; i < 5; i++) {
      this.obstaculos[i] = new Obstaculo();
    }
  }

  actualizar() { //Desarrollo del juego
    if (this.estado === "jugando") {

      //Si estoy jugando, se empieza a reproducir la música de fondo y el contador disminuye.
      if (!sonidoMisterio.isPlaying()) {
        sonidoMisterio.loop();
      }
      this.tiempo--;

      // Mover autos y chequear colisiones
      for (let i = 0; i < this.autos.length; i++) { //Llamamos al método mover para que se empiecen a mover los autos
        this.autos[i].mover();

        if (this.autos[i].colision(this.personaje)) { //Si un auto choca al personaje, el contador de vidas disminuye y suena un sonido de choque.
          this.vidas--;
          sonidoChoque.play();

          // Cuando el auto choca al personaje, queremos que se reinicien sus propiedades de ubicación para que vuelvan a caer.
          this.autos[i].y = random(-200, -50);
          this.autos[i].x = random(100, width - 100 - this.autos[i].tam);

          if (this.vidas <= 0) { //Si el contador de vidas llega a 0, pasamos al estado "perdido".
            this.estado = "perdido";
          }
        }
      }

      //Mientras seguimos jugando, también queremos detectar las colisiones entre obstáculos y personaje.
      for (let i = 0; i < this.obstaculos.length; i++) {
        if (this.obstaculos[i].colision(this.personaje)) { //Si se da la colisión, el personaje "vibra".
          this.personaje.y += random(-10, 10);
        }
      }

      // Si el personje cruza la calle y tiene al menos una vida, gana y se corta el audio de fondo.
      if (this.personaje.x + this.personaje.tam >= width - 100 && this.vidas > 0) {
        this.estado = "ganado";
        sonidoMisterio.stop();
      }

      // Derrota por falta tiempo
      if (this.tiempo <= 0) {
        this.estado = "perdido";
        sonidoMisterio.stop();
      }
    }
  }

  dibujar() { //Dibuja escenarios según en qué estado se encuentra el programa.
    if (this.estado === "inicio") { //Muestra imagen de presentación + instrucciones
      image(fondoInicio, 0, 0, width, height);
      this.mostrarInstrucciones();
    } else if (this.estado === "jugando") { //Dibuja el escenario de juego
      this.dibujarJuego();
    } else if (this.estado === "ganado") { //muestra imagen de victoria con texto correspondiente
      image(fondoGanaste, 0, 0, width, height);
      this.mostrarMensaje("¡GANASTE!\nEvitaste a la policía y te uniste a una resistencia misteriosa.\nPulsa ENTER para volver al inicio");
    } else if (this.estado === "perdido") { //idem en caso de derrota
      image(fondoPerdiste, 0, 0, width, height);
      this.mostrarMensaje("PERDISTE\nPulsa ENTER para volver al inicio");
    }
  }

  dibujarJuego() { //Escenario de juego. Llamamos a este método en dibujar si estamos en el estado jugando
    //background(50);

    // Vereda izquierda
    fill(100);
    rect(0, 0, 100, height);

    // Calle
    fill(150);
    rect(100, 0, width - 200, height);

    // Vereda derecha
    fill(100, 255, 100);
    rect(width - 100, 0, 100, height);

    // DATOS DEL JUGADOR
    fill(0);
    textSize(20);
    text("Vidas: " + this.vidas, 50, 30);
    text("Tiempo: " + int(this.tiempo / 60), width - 50, 30); //Como asignamos tiempo = 1800, lo dividimos por 60 (por los fps que corre el programa) y tomamos el valor entero de esta división.

    //AHORA DIBUJAMOS AL PERSONAJE, LOS AUTOS Y LOS OBSTÁCULOS
    this.personaje.dibujar();

    for (let i = 0; i < this.obstaculos.length; i++) {
      this.obstaculos[i].dibujar();
    }

    for (let i = 0; i < this.autos.length; i++) {
      this.autos[i].dibujar();
    }
  }

  mostrarInstrucciones() {//Llamamos a este método en dibujar, si estamos en el estado inicio.
    fill(255);
    textAlign(CENTER);
    textSize(18);
    text("Llega al otro lado de la pantalla moviéndote con las flechitas.\n" +
      "Evita los pozos y ser chocado por los autos de policía.\n" +
      "Llegá al otro lado antes de los 30 segundos y con al menos una vida.\n" +
      "Pulsa ESPACIO para jugar.\n\n" +
      "Alumnos: Mateo Delgadino y Ezequiel Lisi", width / 2, height - 150);
  }

  mostrarMensaje(txt) {//Llamamos a este método en dibujar si estamos en el estado "ganado" o "perdido".
    fill(255);
    textAlign(CENTER);
    textSize(22);
    text(txt, width / 2, height - 100);
  }

  reiniciar() { //Llamamos a este método en el keyPressed
    this.personaje = new Personaje(50, height / 2);
    this.vidas = 3;
    this.tiempo = 1800;
    this.estado = "inicio";

    for (let i = 0; i < this.autos.length; i++) {
      this.autos[i] = new AutoDePolicia();
    }
    for (let i = 0; i < this.obstaculos.length; i++) {
      this.obstaculos[i] = new Obstaculo();
    }

    sonidoMisterio.stop();
  }
}
