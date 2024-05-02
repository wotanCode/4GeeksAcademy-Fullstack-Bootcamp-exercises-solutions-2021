//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//Componente para contador
const SecondsCounter = props => {
	return (
		<div className="cronometro text-center bg-dark p-3">
			<span className="indice">
				<i className="fas fa-clock"></i>
			</span>
			<span className="cuatro">{props.indice4}</span>
			<span className="tres">{props.indice3}</span>
			<span className="dos">{props.indice2}</span>
			<span className="uno">{props.indice1}</span>
		</div>
	);
};
//
//Protypes de los indices del contador
SecondsCounter.propTypes = {
	indice1: PropTypes.number,
	indice2: PropTypes.number,
	indice3: PropTypes.number,
	indice4: PropTypes.number
};
//Inicializacion del contador
let contador = 0;
//usamos la funcion setinterval y metemos el render dentro para que renderise cada actualizacion
//render your react application
setInterval(function() {
	//variables de cada numero del indice
	const num1 = contador % 10;
	const num2 = Math.floor(contador / 10) % 10;
	const num3 = Math.floor(contador / 100) % 10;
	const num4 = Math.floor(contador / 1000) % 10;
	contador++;
	//console.log("recargando cada segundo");
	ReactDOM.render(
		<SecondsCounter
			indice1={num1}
			indice2={num2}
			indice3={num3}
			indice4={num4}
		/>,
		document.querySelector("#app")
	);
}, 1000);
