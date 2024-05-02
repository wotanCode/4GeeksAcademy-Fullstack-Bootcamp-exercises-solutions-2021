//variables

let pronombre = ['El','Nuestra'],
    adjetivo = ['mejor', 'genial'],
    sutantivo = ['carro', 'casa'],
    dominio = ['.com','.org'];

//Descomenta este codigo para probar con mas variables
/*
let pronombre = ['El','Nuestra','Algun'],
    adjetivo = ['mejor', 'genial','super'],
    sutantivo = ['carro', 'casa', 'castor'],
    dominio = ['.com','.org','.net'];
*/

for (i=0; i < pronombre.length; i++){
    for (u=0; u < pronombre.length; u++){
        for (y=0; y < pronombre.length; y++){
            for (p=0; p < pronombre.length; p++){
            console.log(pronombre[i]+adjetivo[u]+sutantivo[y]+dominio[p]);
            }
        }
    }
}