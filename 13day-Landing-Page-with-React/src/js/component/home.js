import React from "react";
import PropType from "prop-types";

//include images into your bundle
/*
import artesmarciales from "../../img/artesmarciales.jpg";
import guitarra1 from "../../img/guitarra1.jpg";
import starwars from "../../img/starwars.jpg";
import theoffice from "../../img/theoffice.jpg";
*/

const Cabecera = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					LandingPagewithReact
				</a>

				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
const Jumbotron = () => {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">Landing Page with React</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Morbi convallis nulla nec augue laoreet, sit amet eleifend
					nulla tempus. Sed quis viverra risus, ac tristique nulla.
				</p>
				<hr className="my-4"></hr>
				<p>
					Sed eget leo a diam mollis malesuada sit amet sit amet
					turpis. Pellentesque id feugiat nibh, eget semper metus.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						React!
					</a>
				</p>
			</div>
		</div>
	);
};
const ElFooter = () => {
	return (
		<footer className="bg-dark text-center text-white">
			<div className="container text-center py-5">
				<h4>Todos los derechos reservados</h4>
				<h3>https://github.com/wotanCode</h3>
			</div>
		</footer>
	);
};

const Cartas = props => {
	return (
		<div className="card col-3">
			<img className="card-img-top" src={props.imageUrl} alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
Cartas.propTypes = {
	title: PropType.string,
	imageUrl: PropType.string,
	description: PropType.string
};
//create your first component
export function Home() {
	return (
		<div className="">
			<Cabecera />
			<Jumbotron />
			<div className="container">
				<div className="my-5 row justify-content-between">
					<Cartas
						title="Titulo n1"
						description="Descripcion diseñado para la carta numero uno"
						imageUrl="https://via.placeholder.com/500x325"
					/>
					<Cartas
						title="Titulo n2"
						description="Descripcion diseñado para la carta numero dos"
						imageUrl="https://via.placeholder.com/500x325"
					/>
					<Cartas
						title="Titulo n3"
						description="Descripcion diseñado para la carta numero tres"
						imageUrl="https://via.placeholder.com/500x325"
					/>
					<Cartas
						title="Titulo n4"
						description="Descripcion diseñado para la carta numero cuatro"
						imageUrl="https://via.placeholder.com/500x325"
					/>
				</div>
			</div>
			<ElFooter />
		</div>
	);
}
