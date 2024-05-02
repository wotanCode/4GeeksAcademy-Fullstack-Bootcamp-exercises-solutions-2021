let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

let prepender = function(name){
	return 'My name is: '+name;
};

//your code here
var namesMejorados = names.map(prepender);
console.log (namesMejorados);