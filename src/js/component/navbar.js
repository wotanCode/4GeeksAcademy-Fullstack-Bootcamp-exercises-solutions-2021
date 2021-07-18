import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; //traermos el  contexto

//La lista de downDrop

export const Navbar = () => {
	const [listaFav, setListaFav] = useState([]);
	//Funcion para elimminar elementos del arreglo
	/*
	function eliminar(index) {
		if (index > -1) {
			const filterList = listaFav.filter(
				item => item !== listaTareas[index]
			);
			setListaFav(filterList);
		}
	}*/

	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars blog!</span>
			</Link>
			<div className="ml-auto">
				{/*<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
    </Link>*/}

				<span className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle mx-2"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favoritos {store.favoritosLista.length}
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favoritosLista.map((item, index) => {
							return (
								//Estos son los elementos que se muestran en el dropdown
								<a key={index} className="dropdown-item" href="#">
									<span>{item}</span>
									{/*El boton para eliminar elementos*/}
									<button
										className=""
										onClick={() => {
											actions.setEliminarFavoritos(item);
										}}>
										<span>X</span>
									</button>
								</a>
							);
						})}
					</div>
				</span>

				<Link to="/personajes">
					<button className="btn btn-secondary mx-2">Personajes</button>
				</Link>
				<Link to="/vehiculos">
					<button className="btn btn-secondary mx-2">Vehiculos</button>
				</Link>
				<Link to="/planetas">
					<button className="btn btn-secondary mx-2">Planetas</button>
				</Link>
			</div>
		</nav>
	);
};
