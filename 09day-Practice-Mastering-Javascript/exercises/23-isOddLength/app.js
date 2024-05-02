// Write your function here

function isOddLength(palabra) {
  // your code here
    if (palabra.length % 2 == 0){
        return false;
    }
    else{
        return true;
    }
}

var output = isOddLength('special');
console.log(output); // --> true