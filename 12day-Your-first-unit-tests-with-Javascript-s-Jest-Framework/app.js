// app.js file content
console.log("Hello World");
// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))
// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };

/*
fromDollarToYen //dolares a yenes
fromEuroToDollar //euro dollar
fromYanToPound //yenes a libras
*/


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


// declaramos una funcion con el mismo nombre "formEuroToDollar"

const fromDollarToYen  = function(valueInDollar){
    // convertimos el valor a Yenes
    let valueInYen = valueInDollar / oneEuroIs['USD']
    // retornamos el valor
    return valueInYen * oneEuroIs['JPY'];
}

//Esta es la unica funcion que me da el ejercicio, todos los demas son mios
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromYenToPound  = function(valueInYen){
    // convertimos el valor a Libras
    let euro = valueInYen / oneEuroIs['JPY'];
    // retornamos el valor
    return euro * oneEuroIs['GBP'];
}

console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));

module.exports = { sum , fromDollarToYen, fromEuroToDollar, fromYenToPound }
