let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let holamundo = document.createElement("div");
	holamundo.innerHTML = "Hello World";
	holamundo.style.background = "yellow";
	//document.querySelector("body").appendChild(holamundo);
	document.body.appendChild(holamundo);

	//let holamundo = (document.body.innerHTML = "<div>Hello World</div>");
	//let holamundo = (document.body.innerHTML = "<div style ='background: yellow'>Hello World</div>");
});
