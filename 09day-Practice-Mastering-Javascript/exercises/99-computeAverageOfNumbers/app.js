// Write your function here
function computeAverageOfNumbers(arr) {
  var sum = 0;
  if (arr.length < 1) {
    return 0;
  }
  arr.forEach(function(i) {
    sum += i;
  });
  return sum / arr.length;
}

console.log(computeAverageOfNumbers([1,2,3,4,5]));