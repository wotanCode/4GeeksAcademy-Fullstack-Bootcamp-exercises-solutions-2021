import React, { useState, useEffect } from "react";
export function Home() {
	//Creamos arreglo, en este caso solo tiene un elemento
	//const [listaTareas, setListaTareas] = useState(["Recordar agregar tareas"]);
	const [listaTareas, setListaTareas] = useState([]);

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

	//REPARANDO ESTO
	const creartodo = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/wotanCode", {
			method: "POST",
			body: [],
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
				//console.log(resp.status); // el código de estado = 200 o código = 400 etc.
				//console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				setListaTareas(data);
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				//console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch(error => {
				//manejo de errores
				console.log(error);
			});
	};

	//Este metodo es para llamar a la API y mostrarlo en el to-do List
	const llamarTodo = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/wotanCode", {
			method: "GET",
			//body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
				//console.log(resp.status); // el código de estado = 200 o código = 400 etc.
				//console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				setListaTareas(data);
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				//console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch(error => {
				//manejo de errores
				console.log(error);
			});
	};

	//este es para cuando cargamos la informacion a la API
	const cargarTodo = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/wotanCode", {
			method: "PUT",
			body: JSON.stringify(listaTareas),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				//console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
				//console.log(resp.status); // el código de estado = 200 o código = 400 etc.
				//console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => llamarTodo())
			//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
			//console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			//setListaTareas(data);

			.catch(error => {
				//manejo de errores
				console.log(error);
			});
	};

	const borrarTodo = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/wotanCode", {
			method: "DELETE",
			//body: JSON.stringify(listaTareas),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				//console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
				//console.log(resp.status); // el código de estado = 200 o código = 400 etc.
				//console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => llamarTodo())
			//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
			//console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			//setListaTareas(data);

			.catch(error => {
				//manejo de errores
				console.log(error);
			});
	};

	useEffect(() => {
		//creartodo();
		llamarTodo();
	}, []);

	return (
		<div className="text-center mt-5 container">
			<h1>ToDo list</h1>
			{/*Formulario*/}
			<form
				onSubmit={evento => {
					//evitamos que se recarge la pagina
					evento.preventDefault();
					if (inputText.label.length > 0)
						setListaTareas([...listaTareas, inputText]);
					//setInputText("");
					setInputText({ label: "", done: false });
				}}>
				{/*input para agregar tareas*/}
				<input
					className="form-control form-control-lg my-3 elinput"
					placeholder="Agrega tus tareas"
					//onChange={evento => setInputText(evento.target.value)}
					onChange={evento =>
						setInputText({
							label: evento.target.value,
							done: false
						})
					}
					//value={inputText}></input>
					value={inputText.label}></input>
			</form>
			{/*Mostrando arreglo*/}
			<ul className="list-group row">
				{listaTareas.map((item, index) => {
					return (
						<li
							className="list-group-item text-left elementos"
							key={index}>
							<span>{item.label}</span>
							{/*<span>{item}</span>*/}
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
			{/*Mostramos numericamente la cantidad de pendientes*/}
			<div className="pendientes">{listaTareas.length} pendiente/s</div>
			<footer className="footerr">
				<button className="" onClick={() => cargarTodo()}>
					Cargar tareas en al API
				</button>
				<button className="" onClick={() => borrarTodo()}>
					Eliminar to-do de la Api
				</button>
				<p>Por Pedro Yanez</p>
			</footer>
		</div>
	);
}
