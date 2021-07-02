import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; //traermos el  contexto

export const Navbar = () => {
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

				<Link to="/personajes">
					<button className="btn btn-primary">Personajes</button>
				</Link>
				<Link to="/vehiculos">
					<button className="btn btn-primary">Vehiculos</button>
				</Link>
				<Link to="/planetas">
					<button className="btn btn-primary">Planetas</button>
				</Link>

				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
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
								<a key={index} className="dropdown-item" href="#">
									{item}
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
