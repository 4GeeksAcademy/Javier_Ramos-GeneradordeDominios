/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let generadordominio = () => {
  let pronombre = ["el", "nuestro", "este"];
  let adjetivo = ["increible", "absurdo", "gran", "bizarro"];
  let sustantivo = ["buscador", "blog", "navegador", "almacen", "consultor"];
  let extension = [".com", ".es", ".net"];

  let numpronombre = Math.floor(Math.random() * 3);
  let numadjetivo = Math.floor(Math.random() * 4);
  let numsustantivo = Math.floor(Math.random() * 5);
  let numextension = Math.floor(Math.random() * 3);

  return console.log(
    "www." +
      pronombre[numpronombre] +
      adjetivo[numadjetivo] +
      sustantivo[numsustantivo] +
      extension[numextension]
  );
};

generadordominio();
