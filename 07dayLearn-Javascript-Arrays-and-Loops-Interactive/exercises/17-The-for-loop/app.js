var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];
let aux = 0;
for (var index in myArray){
    aux = aux+myArray[index];
    //console.log(myArray[index]);
}
let total= aux / myArray.length;
//console.log(aux);//436464
console.log(total);//27278.8125