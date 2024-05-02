// Write your function here
var myObj = {
  myKey: [1, 2, 4]
};

function getFirstElementOfProperty(obj, key) {
  if (!Array.isArray(obj[key])) { //verificamos si es un array aqui
    return undefined;
  } else {
    return obj[key][0];
  }
}

console.log(getFirstElementOfProperty(myObj, 'myKey'));