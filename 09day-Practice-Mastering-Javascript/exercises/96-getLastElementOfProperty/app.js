// Write your function here
var myObj = {
  myKey: [1, 2, 5]
};
function getLastElementOfProperty(obj, key) {
  if (!Array.isArray(obj[key])) {  // satisfies Notes requirements
    return undefined;
  } else {
    return obj[key][obj[key].length-1];  // return last element of array in object's key
  }
}
console.log(getLastElementOfProperty(myObj, 'myKey'));