import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext"; //traermos el  contexto

export const Planetas = () => {
	//const [dataplanetas, setDataPlanetas] = useState([]);
	const { store, actions } = useContext(Context);

	const listadoPlanetas = () => {
		fetch("https://swapi.dev/api/planets/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setDataPlanetas(data.results));
	};

	useEffect(() => {
		actions.fetchPlanetas();
		//listadoPersonajes(); metodo sin flux
	}, []);

	return (
		<div className="container">
			<h1 className="my-5 text-white">Planetas</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.planetasLista.map((item, index) => {
					const dataPlanets = [
						{
							label: "Climate",
							value: item.climate
						},
						{
							label: "Gravity",
							value: item.gravity
						},
						{
							label: "Terrain",
							value: item.terrain
						}
					];
					return (
						<Card
							key={index}
							title={item.name}
							imagen="http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"
							contenido={dataPlanets}
							categoria="/planetas/"
							id={index}

							/*metodo anterior con los otros protypes
							climate={item.climate}
							gravity={item.gravity}
							terrain={item.terrain}
							*/
						/>
					);
				})}
			</div>
		</div>
	);
};
