function lineas() {
  stroke(255);
  strokeWeight(5);
  let tamLinea = tam / 2;
  for (let x = 0; x <= cant; x++) {
    for (let y = 0; y <= cant; y++) {
      let cx = 400 + x * tam - tam / 2;
      let cy = y * tam - tam / 2;



      let sentido = tocaZonaRoja(x, y);

      if (invertir) {
        sentido = !sentido;
      }

      if (sentido) {
        line(cx - tamLinea / 2, cy - tamLinea / 2, cx + tamLinea / 2, cy + tamLinea / 2);
      } else {
        line(cx - tamLinea / 2, cy + tamLinea / 2, cx + tamLinea / 2, cy - tamLinea / 2);
      }
    }
  }
}

function circulos() {
  stroke(0);
  strokeWeight(3);
  ellipseMode(CENTER);

  for (let x = 0; x <= cant; x++) {
    for (let y = 0; y <= cant; y++) {
      if (estaEnZonaRoja(x, y)) {
        dibujarCirculoConColor(400 + x * tam, y * tam, tam, color(198, 55, 26));
      } else {
        dibujarCirculoConColor(400 + x * tam, y * tam, tam, color(96, 147, 144));
      }
    }
  }
}

function dibujarCirculoConColor(cx, cy, diametro, c) {
  fill(c);
  ellipse(cx, cy, diametro, diametro);
}

function estaEnZonaRoja(x, y) {
  return (x >= 5 && x < 10 && y >= 5 && y < 10);
}

function tocaZonaRoja(x, y) {
  return (estaEnZonaRoja(x, y) || (x > 0 && estaEnZonaRoja(x - 1, y)) || (y > 0 && estaEnZonaRoja(x, y - 1)) || (x > 0 && y > 0 && estaEnZonaRoja(x - 1, y - 1)));
}

function mousePressed() {
  let decremento;

  if (mouseX >= 400 && mouseX <= 800) {
    if (mouseX >= (width/6)*4 && mouseX <= (width/6)*5) {

      let minRand = map(mouseX, 550, 650, 3, 3.5);
      let maxRand = map(mouseX, 550, 650, 4, 5);
      decremento = random(minRand, maxRand);
    } else {

      decremento = 1;
    }

    if (cant - decremento < 1) {
      cant = 14;
    } else {
      cant -= decremento;
    }

    tam = (width / 2) / cant;
  }
}

function keyPressed() {
  if (key==='i' || key==='I') {
    invertir = !invertir;
  }

  if (keyCode === ENTER) {
    cant = 14;
    tam = (width / 2) / cant;
    invertir = false;
  }
}

