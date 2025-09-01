//Link al video de Youtube: https://youtu.be/llkCWEhPmN4
//Alumno: Ezequiel Lisi
//Comisión 1
//Título del trabajo: Obra 12

let obra12;
let cant=14;
let tam;
let invertir = false;

function preload(){
  obra12 = loadImage('data/12.png');
}

function setup() {
  createCanvas(800, 400);
  tam = (width/2)/cant;
}

function draw() {
  background(0);
  lineas();
  circulos();
  image(obra12, 0, 0, 400, 400);
}
