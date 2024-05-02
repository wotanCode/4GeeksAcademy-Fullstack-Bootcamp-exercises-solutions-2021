function generateRandomArray()
{
	var auxArray = [];
	var randomLength = Math.floor(Math.random()*100);
	for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
var myStupidArray = generateRandomArray();

//Your code here

let theLastOne = "valorX";
myStupidArray[myStupidArray.length-1]= "valorX";
console.log(myStupidArray[myStupidArray.length-1]);