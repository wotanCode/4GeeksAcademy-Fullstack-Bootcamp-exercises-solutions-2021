// importar la función sum del archivo app.js
const { sum } = require('./app.js');
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require ('./app.js')

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One dollar should be 106.58 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    // utilizo la function de la forma como se espera que funcione
    const yen = fromDollarToYen(1)
    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 1 / 1.2 * 127.9; 
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yen);
})

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)
    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 

    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})
test("One yen should be 0.00625 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    // utilizo la function de la forma como se espera que funcione
    const pound = fromYenToPound(1)
    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 1 / 127.9 * 0.8; 
    // hago mi comparacion (la prueba)
    expect(expected).toBe(pound);
})