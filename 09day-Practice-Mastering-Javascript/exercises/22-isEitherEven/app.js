// Write your function here
// Write your function here
function isEitherEven(num1, num2) {
  // your code here
    var x = num1, num2;
    if (num1 % 2 == 0 || num2 % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

var output = isEitherEven(1, 4);
console.log(output); // --> verdadero