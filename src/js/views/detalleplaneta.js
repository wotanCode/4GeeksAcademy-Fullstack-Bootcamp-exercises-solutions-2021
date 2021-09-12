import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext"; //traermos el  contexto

export const DetallePlaneta = () => {
	const { store, actions } = useContext(Context);

	const params = useParams();
	console.log(params);

	//console.log(store.personasLista[parseInt(idparam.id)]);

	useEffect(() => {
		actions.fetchPlanetas();
		//destructuro el contenido de la variable y lo muestro en la consola
		console.log(store.planetasLista[params.id]);
	}, []);

	return (
		<div className="container">
			{/* <h1 className="my-5 text-white">Personaje:</h1> */}
			<div className="card">
				<img
					className="card-img-top"
					src="http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"
				/>
				<div className="card-body">
					<h5 className="card-title">{store.planetasLista[params.id].name}</h5>
					<p className="card-text">
						<ul className="list-group">
							<li className="list-group-item">Climate: {store.planetasLista[params.id].climate}</li>
							<li className="list-group-item">Gravity: {store.planetasLista[params.id].gravity}</li>
							<li className="list-group-item">Terrain: {store.planetasLista[params.id].terrain}</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	);
};
