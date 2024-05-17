/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generadorDominio = () => {
  let pronombres = ["el", "nuestro", "este"];
  let adjetivos = ["increible", "absurdo", "gran", "bizarro"];
  let sustantivos = ["buscador", "blog", "navegador", "almacen", "consultor"];
  let extensiones = [".com", ".es", ".net"];

  for (let pronombre of pronombres) {
    for (let adjetivo of adjetivos) {
      for (let sustantivo of sustantivos) {
        for (let extension of extensiones) {
          console.log("www." + pronombre + adjetivo + sustantivo + extension);
        }
      }
    }
  }
};

generadorDominio();
