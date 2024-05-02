// Write your function here
var myObj = {
  myKey: [1000, 20, 50, 500]
};
function getElementsLessThan100AtProperty(obj, key) {  // HoF
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) {
    return []; 
  }
  return obj[key].filter(function(item) {
    return item < 100;
  });
}
console.log(getElementsLessThan100AtProperty(myObj, 'myKey'));