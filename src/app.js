/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let generadorDominio = () => {
  let pronombre = ["el", "nuestro", "este"];
  let adjetivo = ["increible", "absurdo", "gran", "bizarro"];
  let sustantivo = ["buscador", "blog", "navegador", "almacen", "consultor"];
  let extension = [".com", ".es", ".net"];

  let numberPronombre = Math.floor(Math.random() * pronombre.length);
  let numberAdjetivo = Math.floor(Math.random() * adjetivo.length);
  let numberSustantivo = Math.floor(Math.random() * sustantivo.length);
  let numberExtension = Math.floor(Math.random() * extension.length);

  return console.log(
    "www." +
      pronombre[numberPronombre] +
      adjetivo[numberAdjetivo] +
      sustantivo[numberSustantivo] +
      extension[numberExtension]
  );
};

generadorDominio();
