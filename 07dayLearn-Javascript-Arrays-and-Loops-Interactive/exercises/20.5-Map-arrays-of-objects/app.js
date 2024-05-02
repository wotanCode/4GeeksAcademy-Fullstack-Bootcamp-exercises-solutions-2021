let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];
//declaramos año de hoy dia
let aniohoy = new Date();

let simplifier = function(person){
	//Hacemos la edad de cada individuo
	let edad = aniohoy.getFullYear() - person.birthDate.getFullYear();
	//creamos una variable pero para verificar el mes
	let meshoy = aniohoy.getMonth() - person.birthDate.getMonth();
	if (meshoy < 0 || (meshoy === 0 && aniohoy.getDate() < person.birthDate.getDate())){
		edad--;
	}
	return "Hello, my name is "+person.name+" and I am "+edad+" years old";
};

console.log(people.map(simplifier));