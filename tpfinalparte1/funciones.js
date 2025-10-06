// Inicia el arreglo textos. Cada índice del arreglo corresponde a una imagen.
function frases() {
  textos=['Es el año 2053. La sociedad no sale a las calles ya que viven en sus casas siendo consumidas por la televisión.', 'Una noche de Novimebre el señor Leonard Mead decide ir a caminar por las calles vacías de la ciudad.', 'Las casas parecen tumbas iluminadas por las luces amarillas de los televisores.', '¿Qué camino deseas elegir?', 'El frío es envolvente. Mead sigue caminando solo. De repente, un par de faros se encienden y lo encandilan.', 'Es la policía. Suena un voz metálica proveniente del auto que le pregunta a Mead qué hace fuera de su casa.', '¿Cómo deseas actuar?', 'La policía arresta al señor Mead y es llevado al Psiquiátrico de Investigación de Tendencias Regresivas.', 'El ruido metálico del coche dice que el señor Mead es una amenaza y ha sido detectada.', '¿Qué deseas hacer?', 'El señor Mead es asesinado por conducta anormal.', 'El viento mueve las hojas secas entre las veredas vacías. A lo lejos, Leonard Mead escucha unos pasos humanos.', 'Hay tres personas caminando en silencio.', 'Ellos se acercan a Mead y le preguntan si desea unirse a ellos. ¿Qué eliges?', 'Crece una nueva resistencia misteriosa.', 'Cuento: El peatón de Ray Bradbury. \nAlumnos: Mateo Delgadino y Ezequiel Lisi. \nComisión: 1 - José Luis Bugiolachi.'];
}

// Esta función lo que hace es decir qué botones van en cada diapositiva. Los condicionales deciden qué botones aparecen. Llama a dibujarBoton() para mostrar los botones.
function botones(pagina) {
  if (pagina !=== 3 && pagina !=== 6 && pagina !=== 7 && pagina !=== 9 && pagina !=== 10 && pagina !=== 13 && pagina !=== 14 && pagina !=== 15) { //Ecluimos diapositivas con dos botones + la de créditos + la de finales.
    dibujarBoton(500, 400, 100, 40, "SIGUIENTE");
  }

  if (pagina === 3) {
    dibujarBoton(100, 400, 100, 40, "OESTE");
    dibujarBoton(400, 400, 100, 40, "ESTE");
  }

  if (pagina === 6) {
    dibujarBoton(100, 400, 100, 40, "CALMADO");
    dibujarBoton(400, 400, 100, 40, "DESAFIANTE");
  }

  if (pagina === 9) {
    dibujarBoton(100, 400, 100, 40, "CORRER");
    dibujarBoton(400, 400, 100, 40, "QUEDARSE");
  }

  if (pagina === 13) {
    dibujarBoton(100, 400, 100, 40, "UNIRSE");
    dibujarBoton(400, 400, 100, 40, "NO UNIRSE");
  }

  if (pagina === 15) {
    dibujarBoton(width/2 - 50, 400, 100, 40, "REINICIO");
  }

  if (pagina === 7 || pagina === 10 || pagina === 14) {
    dibujarBoton(width/2 - 50, 400, 100, 40, "FIN");
  }
}

// Esta otra función o que hace es dibujar botones en la pantalla. Recibe parámetros de posición, tamaño y texto.
function dibujarBoton(x, y, ancho, alto, texto) {
  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {
    fill(180);
  } else {
    fill(200, 150);
  }
  rect(x, y, ancho, alto);
  fill(0);
  textSize(15);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho/2, y + alto/2);
}

