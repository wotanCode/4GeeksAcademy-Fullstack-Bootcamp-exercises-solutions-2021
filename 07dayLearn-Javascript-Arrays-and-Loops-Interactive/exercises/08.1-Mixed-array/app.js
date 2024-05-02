var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
//your code here

let tipo = [];

for (let i=0; i< mix.length; i++){
        tipo.push(typeof mix[i]);
}
console.log(tipo);