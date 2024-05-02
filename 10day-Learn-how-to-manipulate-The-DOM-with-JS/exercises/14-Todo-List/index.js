// Your code here
let seleccionar = document.querySelector("ul"); // aqui seleccionamos el uL //creamos la etiqueta span

//Funcion para agregar elementos
function elinput() {
	//Variables
	let input = document.getElementById("addToDo").value; //capturamos lo que se escribe en el input
	let nuevalista = document.createElement("li"); //creamos la etiqueta Li
	let text = document.createTextNode(input); //Agregamos el texto al input
	/*Construimos el nuevo elemento*/
	nuevalista.appendChild(btnBorrar()); //agregamos al <li> el span recordemos que el span esta dentro de una funcion
	nuevalista.appendChild(text); //Agregamos al li el texto ingresado
	seleccionar.appendChild(nuevalista); //agregamos al Input
	//nuevalista.innerHTML = input; //Metemos el elemento a la lista
	deleteElements();
	document.getElementById("addToDo").value = ""; //lo ponemos vacio de nuevo
}

//Funcion para crear el boton de eliminar, agregarlo
function btnBorrar() {
	//variables
	let nuevospan = document.createElement("span"); //creamos la etiqueta span
	let nuevoi = document.createElement("i"); //creamos la etiqueta i
	//Construimos el elemento
	nuevoi.className = "fa fa-trash"; //añadimos la clase al I
	nuevospan.appendChild(nuevoi); //metemos dentro del span el I
	return nuevospan; //creamos el elemento ya construido
}
//Funcion para borrar elementos
function deleteElements() {
	//variables
	let botesbasura = document.querySelectorAll(".fa-trash"); //creamos el elemento para borrar
	for (let botedebasura of botesbasura) {
		botedebasura.addEventListener("click", function(e) {
			let item = e.target.parentElement;
			let item2 = item.parentElement;
			//console.log(item2);
			seleccionar.removeChild(item2);
		});
	}
}
//insertamos en la lista el contenido del input
let aux = document.querySelector("#addToDo");
aux.addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
		elinput();
	}
});
//deleteElements();

//ZONA DEPRUEBAS
//Con esto comprobamos que seleccionamos el UL
/*
seleccionar.addEventListener("click", function() {
	alert("hola");
});
*/

/*
//PROBAMOS CAPTAR VALORES DEL INPUT
function elinput() {
	let input = document.getElementById("addToDo").value; //capturamos lo que se escribe en el input
	alert(input);
}
elinput();
*/
