function isOldEnoughToDrive(edad){
    // your code here
    if (edad > 15) {
        return true;
    }
    else {
        return false;
    }
}
var output = isOldEnoughToDrive(22);
console.log(output);