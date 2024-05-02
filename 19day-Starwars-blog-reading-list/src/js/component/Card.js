import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext"; //traermos el  contexto
import { Link } from "react-router-dom";
//import { Card } from "../component/Card";
import PropTypes from "prop-types";

//mx-3" style={{ width: "18rem" }}>
export const Card = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-3">
			<div className="card">
				{/*<img
					className="card-img-top"
					src="https://kumquat-ferret-00ib3q7x.ws-us09.gitpod.io/files/download/?id=496737d4-fcef-47a2-836a-d8fb798effb5"
					alt="Card image cap"
				/>*/}
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">
						<img src={props.imagen} className="card-img-top" />
						{props.contenido.map((item, index) => {
							return (
								<p key={index}>
									{item.label}: {item.value}
								</p>
							);
						})}

						{/*estado anterior sin los labels
						<p>{props.gender}</p>
						<p>{props.hair}</p>
						<p>{props.eyes}</p>
						<p>{props.climate}</p>
						<p>{props.gravity}</p>
						<p>{props.terrain}</p>
						<p>{props.model}</p>
						<p>{props.consumables}</p>
						<p>{props.vehicle_class}</p>
*/}
					</p>
					<button className="btn btn-primary">
						<Link className="text-light" to={props.categoria + props.id}>
							Learn More!
						</Link>
					</button>
					<a
						onClick={() => actions.setFavoritos(props.title)}
						href="#"
						className="btn btn-warning float-right">
						fav
					</a>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	//general
	title: PropTypes.string,
	imagen: PropTypes.string,
	categoria: PropTypes.string,
	contenido: PropTypes.array,
	id: PropTypes.object

	/* Anteriormente era de esta manera debido a que necesitaba solo mostraba la informacion
	sin embargo ahora que añadi un label que cambia de acuerdo a lo necesitado no hace falta declarar todos estos
	//personajes
	gender: PropTypes.string,
	hair: PropTypes.string,
	eyes: PropTypes.string,
	//planetas
	climate: PropTypes.string,
	gravity: PropTypes.string,
	terrain: PropTypes.string,
	//vehiculos
	model: PropTypes.string,
	consumables: PropTypes.string,
	vehicle_class: PropTypes.string
	*/
};
