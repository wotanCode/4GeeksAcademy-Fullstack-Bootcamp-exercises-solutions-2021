// Write your function here
function areBothOdd(num1, num2) {
  // your code here
    var x = num1, num2;
    if (num1 % 2 == 0 && num2 % 2 == 0){
        return false;
    }
    else{
        return true;
    }
}

var output = areBothOdd(1, 3);
console.log(output); // --> verdadero