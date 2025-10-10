//El Peatón de Ray Bradbury. 
//link de youtube: https://youtu.be/iDaNE_Q5Z20
//Mateo Delgadino y Ezequiel Lisi - Comisión 1

//música
let misterio, policia;


//diagrama
let imagenes = [];
let textos = [];
let cant = 16;
let inicio = 0; //Índice de la diapositiva actual.

function preload() {
  for (let i=0; i<cant; i++) {
    imagenes[i] = loadImage('data/'+i+'.png');
  }

  misterio = loadSound('data/misterio.mp3');
  policia = loadSound('data/policia.mp3');
}

function setup() {
  createCanvas(640, 480);
  textSize(20);
  textAlign(CENTER);
  frases();
}



function draw() {
  image(imagenes[inicio], 0, 0, width, height);
  fill(255, 150);
  rect(20, 20, 600, 100);
  fill(0);
  textAlign(CENTER, CENTER);
  text(textos[inicio], 20, 20, 600, 100);
  botones(inicio);
}





function mousePressed() {
  misterio.loop(); // reproducir sonido ambiente

  if (inicio !== 3 && inicio !== 6 && inicio !== 9 && inicio !== 13 && inicio !== 15) { // Excluye diapositivas con dos botones + la de créditos.
    if (detectarClick(500, 400, 100, 40)) {// Detecta clics sobre botones de diapositivas con un solo botón.
      if (inicio === 4) {// reproducir sonido de policía
        policia.play();
      }

      inicio++;
    }
  }
  
  // Condiciones para diapositivas de dos botones (3,6,9,13) + diapositiva de créditos (15) + diapositivas de finales (7,10,14).
  if (inicio === 3) {
    if (detectarClick(100, 400, 100, 40)) {
      inicio = 4;
    }
    if (detectarClick(400, 400, 100, 40)) {
      inicio = 11;
    }
  }

  if (inicio === 6) {
    if (detectarClick(100, 400, 100, 40)) {
      inicio = 7;
    }
    if (detectarClick(400, 400, 100, 40)) {
      inicio = 8;
    }
  }

  if (inicio === 9) {
    if (detectarClick(100, 400, 100, 40)) {
      inicio = 10;
    }
    if (detectarClick(400, 400, 100, 40)) {
      inicio = 10;
    }
  }

  if (inicio === 13) {
    if (detectarClick(100, 400, 100, 40)) {
      inicio = 14;
    }
    if (detectarClick(400, 400, 100, 40)) {
      inicio = 4;
    }
  }

  // Diapositiva de créditos
  if (inicio === 15) {
    if (detectarClick(width/2 - 50, 400, 100, 40)) {
      inicio = 0;
    }
  }

  // Diapositivas de finales
  if (inicio === 7 || inicio === 10 || inicio === 14) {
    if (detectarClick(width/2 - 50, 400, 100, 40)) {
      inicio = 15;
    }
  }
}
