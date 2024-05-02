// Write your function here
function removeElement(array, discarder) {
  var newArr = []
  console.log(array)
  
  if(array === undefined) {
    return []
  } else {
    for(var i = 0; i < array.length; i++) {
      if(array[i] !== discarder) {
        newArr.push(array[i])
      }
    }
  }
  return newArr
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]