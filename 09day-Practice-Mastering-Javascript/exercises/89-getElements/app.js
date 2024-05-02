// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {  // HoF
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) {
    return [];  // satisfie Notes requirements
  }
  return obj[key].filter(function(num) {  // HoF filters numbers that are 10 into an array
    return num === 10;
  });
}
var myObj = {
  myKey: [1000, 10, 50, 10]
};
console.log(getElementsThatEqual10AtProperty(myObj, 'myKey'));