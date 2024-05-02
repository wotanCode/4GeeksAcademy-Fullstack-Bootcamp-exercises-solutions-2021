var myNumbers = [23,234,345,4356234,243,43,56,2];
// your code here

function myFunction(arreglo){
  return arreglo.map(function(valor){
      //add your code here and return the new value
      return (valor*3);
  });
}

var newArray = myFunction(myNumbers);

console.log(newArray);
/*
Este codigo esta malo, porque el test unitario
me pedia la variable newArray
estuviera fuera de la funcion y no cumplia
de todas maneras es una solucion posible

function myFunction(arreglo){
var newArray = arreglo.map(function(valor){
    //add your code here and return the new value
    return (valor*3);	
});
    return newArray;
}
console.log(myFunction(myNumbers));
*/