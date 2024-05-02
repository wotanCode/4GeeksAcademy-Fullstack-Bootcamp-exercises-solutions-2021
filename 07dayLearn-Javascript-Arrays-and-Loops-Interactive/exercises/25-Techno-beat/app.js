let num = [];
function lyricsGenerator(num){
    let cancion = '';
    let aux = 0;
    for (let i=0; i<=num.length; i++){
        if (num[i] == 0){
            cancion = cancion+'Boom ';
        }
        if (num[i] == 1){
            cancion = cancion+'Drop the base ';
            aux += 1;
            if (aux == 3){
                cancion = cancion+'!!!Break the base!!! ';

            }
        }
    }
    return cancion;
}
// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))