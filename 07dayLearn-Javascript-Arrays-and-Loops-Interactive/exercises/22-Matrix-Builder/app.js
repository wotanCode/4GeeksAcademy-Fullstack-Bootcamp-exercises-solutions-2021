// Code goes here
let matrix = [];
function matrixBuilder(integer){
    for (let i = 0; i<integer; i++){
        let arrY = new Array(integer);
        matrix.push(arrY);
        for(let u=0; u<integer;u++){
            let aleatorio = Math.floor(Math.random()*2+1);
            //console.log(aleatorio); //se genera entre 1 y 2
            if (aleatorio === 2){
                arrY[u]=1; //si coloco este parametro en = 0 genera 1 y 0 aleatorios
            } else {
                arrY[u]=1;
            }
        }
    }
    console.log(matrix);
}
// do not change anything from this line down
console.log(matrixBuilder(5));