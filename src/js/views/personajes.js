import React, { useState, useEffect } from "react";
import { Card } from "../component/Card";

export const Personajes = () => {
	const [dataPersonajes, setDataPersonajes] = useState([]);

	const listadoPersonajes = () => {
		fetch("https://swapi.dev/api/people/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setDataPersonajes(data.results));
	};

	useEffect(() => {
		listadoPersonajes();
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
				{dataPersonajes.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.name}
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
