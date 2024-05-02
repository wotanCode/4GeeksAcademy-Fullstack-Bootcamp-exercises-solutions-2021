import React, { useState } from "react";
export function Home() {
	//Creamos arreglo, en este caso solo tiene un elemento
	const [listaTareas, setListaTareas] = useState(["Recordar agregar tareas"]);

	///Guardar contenido del usuario bajo Status
	const [inputText, setInputText] = useState("");

	//Eliminar contneido
	function eliminar(index) {
		if (index > -1) {
			const filterList = listaTareas.filter(
				/*Basicamente hacemos un filtro y traemos de vuelta todos los elemenetos del arreglo
sin contar el que coincida igual, de este modo, luego creamos un nuevo arreglo o mas bien
igualamos el estado sin el anterior elemento*/
				item => item !== listaTareas[index]
			);
			setListaTareas(filterList);
		}
	}
	return (
		<div className="text-center mt-5 container">
			<h1>ToDo list</h1>
			{/*Formulario*/}
			<form
				onSubmit={evento => {
					//evitamos que se recarge la pagina
					evento.preventDefault();
					if (inputText.length > 0)
						setListaTareas([...listaTareas, inputText]);
					setInputText("");
				}}>
				<input
					className="form-control form-control-lg my-3 elinput"
					placeholder="Agrega tus tareas"
					onChange={evento => setInputText(evento.target.value)}
					value={inputText}></input>
			</form>
			{/*Mostrando arreglo*/}
			<ul className="list-group row">
				{listaTareas.map((item, index) => {
					return (
						<li
							className="list-group-item text-left elementos"
							key={index}>
							<span>{item}</span>
							<button
								className="btn btn-danger eliminador float-right"
								onClick={() => {
									eliminar(index);
								}}>
								<span>X</span>
							</button>
						</li>
					);
				})}
			</ul>
			<div className="pendientes">{listaTareas.length} pendiente/s</div>
			<footer className="footerr">Por Pedro Yanez</footer>
		</div>
	);
}
