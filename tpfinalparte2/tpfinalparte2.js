//link al video de YouTube: https://youtu.be/ls-Tp0_n2ak
//Integrantes: Mateo Delgadino y Ezequiel Lisi - Comisión 1

let juego;

//imágenes a utilizar en las clases
let autopolicia;
let pozo;
let pj;
let fondoInicio;
let fondoPerdiste;
let fondoGanaste;

//sonidos
let sonidoChoque;
let sonidoMisterio;


function preload() {
  //imágenes
  autopolicia = loadImage('data/autopolicia.png');
  pozo = loadImage('data/pozo.png');
  pj = loadImage('data/pj.png');
  fondoInicio = loadImage('data/0.png');
  fondoPerdiste = loadImage('data/1.png');
  fondoGanaste = loadImage('data/2.png');

  //sonidos
  sonidoChoque = loadSound('data/choque.mp3');
  sonidoMisterio = loadSound('data/misterio.mp3');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  juego.actualizar();
  juego.dibujar();
}

function keyPressed() {
  if (key === ' ') {
    if (juego.estado === "inicio") {
      juego.estado = "jugando"; // Si estoy en "inicio" y aprieto ESPACIO, paso a "jugando"
    }
  }

  if (keyCode === ENTER) {
    if (juego.estado === "ganado" || juego.estado === "perdido") {
      juego.reiniciar(); //Si gano o pierdo, al apretar ENTER llamo al método reiniciar
    }
  }

  //Si estoy jugando, llamo al método mover de la clase personaje
  if (juego.estado === "jugando") {
    juego.personaje.mover(keyCode);
  }
}
