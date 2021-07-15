const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personasLista: [], //peopleList
			planetasLista: [], //planetsList
			vehiculosLista: [], //vehiclesList
			favoritosLista: []

			/*Codigo de ejemplo de Store
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]*/ //HastaAqui
		},
		actions: {
			//ACCION para favoritos
			setFavoritos: tituloFav => {
				const store = getStore();
				setStore({ favoritosLista: [...store.favoritosLista, tituloFav] });
			},
			setEliminarFavoritos: titulofav => {
				setStore({ favoritosLista: getStore().favoritosLista.filter(favoritos => favoritos !== titulofav) });
			},

			//Acciones para traer las APIS el contenido de llas API
			fetchPersonas: () => {
				const URL = "https://swapi.dev/api/people";
				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(URL, OBJCONFIG)
					.then(res => res.json()) //Texto plano
					.then(data => setStore({ personasLista: data.results })); //Obtienes los datos
			},
			fetchPlanetas: () => {
				const URL = "https://swapi.dev/api/planets/";
				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(URL, OBJCONFIG)
					.then(res => res.json()) //Texto plano
					.then(data => setStore({ planetasLista: data.results })); //Obtienes los datos
			},
			fetchVehiculos: () => {
				const URL = "https://swapi.dev/api/vehicles/";
				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(URL, OBJCONFIG)
					.then(res => res.json()) //Texto plano
					.then(data => setStore({ vehiculosLista: data.results })); //Obtienes los datos
			},
			/*
			
			A partir de aqui es codigo que trae por defecto de practica
			
			*/
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

/*
Flux
fetchplanetas ()=< profe





TYO:
planetasList: [

]


carpeta palnetas.js
import {Context} from "../store/appcontext

const {store, action} = useContext(Context);



borrar useEffect listadoPlanetas();
en vez de eso agregamos ya lo que seria Action.
fetchplanetas ()=} asi:
useEffect ()
fechtplanetas

store-pplanetalist se coloca en el map que esta dentro del return

*/
