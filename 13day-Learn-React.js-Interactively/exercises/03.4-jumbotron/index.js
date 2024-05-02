import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const Jumbotron = props => {
	return (
		//here you have to return expected html using the properties being passed to the component
		<div className="jumbotron m-5">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropType.string,
	description: PropType.string,
	buttonURL: PropType.string,
	buttonLabel: PropType.string
	// 2) add here the new properties into the proptypes object
};

ReactDOM.render(
	<Jumbotron
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		buttonLabel="Go to the official website"
		buttonURL="https://reactjs.org/"
	/>,
	document.querySelector("#myDiv")
);