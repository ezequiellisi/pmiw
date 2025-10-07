let imagenes = [];
let textos = [];
let cant = 16;
let inicio = 0; //Índice de la diapositiva actual.

function preload() {
  for (let i=0; i<cant; i++) {
    imagenes[i] = loadImage('data/'+i+'.png');
  }
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
  if (inicio !== 3 && inicio !== 6 && inicio !== 9 && inicio !== 13 && inicio !== 15) { // Excluye diapositivas con dos botones + la de créditos.
    if (mouseX > 500 && mouseX < 600 && mouseY > 400 && mouseY < 440) { // Detecta clics sobre botones de diapositivas con un solo botón.
      inicio++;
    }
  }

  // Condiciones para diapositivas de dos botones (3,6,9,13) + diapositiva de créditos (15) + diapositivas de finales (7,10,14).
  if (inicio === 3) {
    if (mouseX > 100 && mouseX < 200 && mouseY > 400 && mouseY < 440) {
      inicio = 4;
    }
    if (mouseX > 400 && mouseX < 500 && mouseY > 400 && mouseY < 440) {
      inicio = 11;
    }
  }

  if (inicio === 6) {
    if (mouseX > 100 && mouseX < 200 && mouseY > 400 && mouseY < 440) {
      inicio = 7;
    }
    if (mouseX > 400 && mouseX < 500 && mouseY > 400 && mouseY < 440) {
      inicio = 8;
    }
  }

  if (inicio === 9) {
    if (mouseX > 100 && mouseX < 200 && mouseY > 400 && mouseY < 440) {
      inicio = 10;
    }
    if (mouseX > 400 && mouseX < 500 && mouseY > 400 && mouseY < 440) {
      inicio = 10;
    }
  }

  if (inicio === 13) {
    if (mouseX > 100 && mouseX < 200 && mouseY > 400 && mouseY < 440) {
      inicio = 14;
    }
    if (mouseX > 400 && mouseX < 500 && mouseY > 400 && mouseY < 440) {
      inicio = 4;
    }
  }

  // Diapositiva de créditos
  if (inicio === 15) {
    if (mouseX > width/2 - 50 && mouseX < width/2 + 50 && mouseY > 400 && mouseY < 440) {
      inicio = 0;
    }
  }

  // Diapositivas de finales
  if (inicio === 7 || inicio === 10 || inicio === 14) {
    if (mouseX > width/2 - 50 && mouseX < width/2 + 50 && mouseY > 400 && mouseY < 440) {
      inicio = 15;
    }
  }
}


