window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	// your code here
	//let aux = document.querySelector("#mySelect");
	let aux = document.querySelector("#mySelect"); //importante

	for (let i = 0; i < countries.length; i++) {
		let option = document.createElement("option"); //importante
		option.text = countries[i];
		aux.add(option);
		document.querySelector("#mySelect").appendChild(option); //importante
	}
	aux.addEventListener("change", function() {
		//alert(`${event.target.value}`);
		alert(event.target.value);
	});
};
