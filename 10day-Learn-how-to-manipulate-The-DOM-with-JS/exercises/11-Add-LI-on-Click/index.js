import { createBrotliDecompress } from "zlib";

let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	//const expected = 'innerHTML = "Fourth element";';

	//innerHTML = "Fourth element";

	let nuevalista = document.createElement("li"); //importante
	nuevalista.innerHTML = "Fourth Element"; //importante
	document.querySelector("#myList").appendChild(nuevalista); //importante
});
