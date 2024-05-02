import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

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

//Se añade el set interval y se coloca la funcion home dentro de el
//PReguntar a los profes porque no funciona el setInterval si tiene un export dentro y como solucionarlo

//create your first component
export function Home() {
	return (
		<div className="">
			<SecondsCounter indice1="0" indice2="0" indice3="0" indice4="0" />
		</div>
	);
}
