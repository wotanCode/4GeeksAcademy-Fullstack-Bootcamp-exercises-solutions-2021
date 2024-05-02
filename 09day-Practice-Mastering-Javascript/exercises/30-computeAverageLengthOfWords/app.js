// Write your function here
function computeAverageLengthOfWords(p1,p2) {
    let x1 = p1.length;
    let x2 = p2.length;
    let r = (x1+x2)/2
    
    return r;
}
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6