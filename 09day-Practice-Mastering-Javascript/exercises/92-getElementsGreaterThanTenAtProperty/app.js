// Write your function here
var myObj = {
  myKey: [1, 20, 30]
};

function getElementsGreaterThan10AtProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) {
    return [];
  }
  return obj[key].filter(function(i) {
    return i > 10;
  });
}

console.log(getElementsGreaterThan10AtProperty(myObj, 'myKey'));  // --> [20, 30]