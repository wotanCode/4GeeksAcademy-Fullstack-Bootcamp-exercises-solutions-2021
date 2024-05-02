import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext"; //traermos el  contexto

export const Vehiculos = () => {
	const { store, actions } = useContext(Context);
	//const [dataVehiculos, setDataVehiculos] = useState([]); metodo antiguo sin flux

	/* metodo llamando antiguo 
	const listadoVehiculos = () => {
		fetch("https://swapi.dev/api/vehicles/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setDataVehiculos(data.results));
	};*/

	useEffect(() => {
		actions.fetchVehiculos();
		//listadoVehiculos(); metodo antiguo
	}, []);

	return (
		<div className="container">
			<h1 className="my-5 text-white">Vehiculos</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.vehiculosLista.map((item, index) => {
					const dataVehiculos = [
						{
							label: "Model",
							value: item.model
						},
						{
							label: "Consumable",
							value: item.consumables
						},
						{
							label: "Vehicle Class",
							value: item.vehicle_class
						}
					];
					return (
						<Card
							key={index}
							title={item.name}
							imagen="http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"
							contenido={dataVehiculos}
							categoria="/vehiculos/"
							id={index}
							/* metodo anterior con protypes
							model={item.model}
							consumables={item.consumables}
							vehicle_class={item.vehicle_class}
							*/
						/>
					);
				})}
			</div>
		</div>
	);
};
