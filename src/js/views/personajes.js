import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext"; //traermos el  contexto

export const Personajes = () => {
	//const [dataPersonajes, setDataPersonajes] = useState([]);
	const { store, actions } = useContext(Context);

	/*
	const listadoPersonajes = () => {
		fetch("https://swapi.dev/api/people/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setDataPersonajes(data.results));
	};
	*/

	useEffect(() => {
		actions.fetchPersonas();
		//listadoPersonajes(); metodo sin flux
	}, []);

	/*
	const labels = [
		{
			label: "titulo",
			valor: "valor"
		},
		{
			label: "titulo",
			valor: "valor"
		}
    ];
    */

	return (
		<div className="container">
			<h1 className="my-5 text-white">Personajes</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.personasLista.map((item, index) => {
					{
						/*dataPersonajes.map((item, index) => {*/
					}
					return (
						<Card
							key={index}
							title={item.name}
							imagen="http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"
							gender={item.gender}
							hair={item.hair_color}
							eyes={item.eye_color}
						/>
					);
				})}
			</div>
		</div>
	);
};
