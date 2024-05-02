// Write your function here
function countAllCharacters(str) {
  var newObj = {}; 
  for (var i in str) {
    if (!newObj[str[i]]) {
      newObj[str[i]] = 1;
    } else { 
      newObj[str[i]]++;
    }
  }
  return newObj;
}
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}