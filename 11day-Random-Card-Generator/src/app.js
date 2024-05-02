/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //Variables
  let naipe = ["&hearts;", "&clubs;", "&spades;", "&diams;"];
  let numero = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
  //funcion para crear un numero aleatorio
  function numa(num) {
    var aleatorio = Math.floor(Math.random() * num.length);
    return num[aleatorio];
  }
  //funcion para mostrar el cambio
  function mostrarmensaje() {
    const figura = numa(naipe);
    if (figura === "&hearts;" || figura === "&diams;") {
      //SOlO CORAZON Y DIAMANTE DEBEN SER ROJOS
      let x, i;
      x = document.querySelectorAll(".naipes");
      for (i = 0; i < x.length; i++) {
        x[i].style.color = "red";
      }
    }
    document.getElementsByClassName("naipes")[0].innerHTML = figura;
    document.getElementsByClassName("naipes")[1].innerHTML = figura;
    document.getElementById("numeracion").innerHTML = numa(numero);
  }

  mostrarmensaje();
};

//Diamante y corazon son rojos
