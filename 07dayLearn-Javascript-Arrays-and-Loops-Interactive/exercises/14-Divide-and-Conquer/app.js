let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(numbers){
    let odd = []; //numero impar
    let even = []; //Numeros par
    let combinacion = [];
    for (i=0; i<numbers.length;i++){
        if (numbers[i]%2===0){
            even.push(numbers[i]);
        } else {
            odd.push(numbers[i]);
        }
    }
    combinacion= combinacion.concat(odd);
    combinacion= combinacion.concat(even);
    return combinacion;
}

console.log(mergeTwoList(list_of_numbers))