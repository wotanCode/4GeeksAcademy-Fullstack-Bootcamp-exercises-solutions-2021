// Write your function here
function isSameLength(pa1,pa2) {
  // your code here
    var x1 = pa1.length;
    var x2 = pa2.length;
    if (x1 === x2){
        return true;
    }
    else{
        return false;
    }
}
var output = isSameLength('words', 'super');
console.log(output); // --> verdadero