import React, { useState, useEffect } from "react";
import { Card } from "../component/Card";

export const Planetas = () => {
	const [dataplanetas, setDataPlanetas] = useState([]);

	const listadoPlanetas = () => {
		fetch("https://swapi.dev/api/planets/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setDataPlanetas(data.results));
	};

	useEffect(() => {
		listadoPlanetas();
	}, []);

	return (
		<div className="container">
			<h1 className="my-5 text-white">Planetas</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{dataplanetas.map((item, index) => {
					/*
                    const dataplanet = [
                        {
                            label: 'Genero',
                            value: item.climate
                        }
                        {
                            label: 'Genero',
                            value: item.gravity
                        }
                        {
                            label: 'Genero',
                            value: item.terrain
                        }
                    ];*/
					return (
						<Card
							key={index}
							title={item.name}
							imagen="http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"
							//contenido={dataplanet}
							climate={item.climate}
							gravity={item.gravity}
							terrain={item.terrain}
						/>
					);
				})}
			</div>
		</div>
	);
};
