function isOldEnoughToVote(edad){
    // your code here
    if (edad >= 18) {
        return true;
    }
    else {
        return false;
    }
}
var output = isOldEnoughToVote(22);
console.log(output);