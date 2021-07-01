/*
import React, { useState, useEffect } from "react";
import { Card } from "../component/Card";

export const Vehiculos = () => {
	const [dataVehiculos, setDataVehiculos] = useState([]);

	const listadoVehiculos = () => {
		fetch("https://swapi.dev/api/vehicles/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setDataVehiculos(data.results));
	};

	useEffect(() => {
		listadoVehiculos();
	}, []);

	return (
		<div className="container">
			<h1 className="my-5 text-white">Vehiculos</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{dataVehiculos.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.name}
							model={item.model}
							consumables={item.consumables}
							vehicle_class={item.vehicle_class}
						/>
					);
				})}
			</div>
		</div>
	);
};
*/