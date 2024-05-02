// Write your function here
var myObj = {
  myKey: [1, 2, 6]
};

function getNthElementOfProperty(obj, key, n) {
  if (!Array.isArray(obj[key])) {
    return undefined;
  } else {
    return obj[key][n];
  }
}

console.log(getNthElementOfProperty(myObj, 'myKey', 1));