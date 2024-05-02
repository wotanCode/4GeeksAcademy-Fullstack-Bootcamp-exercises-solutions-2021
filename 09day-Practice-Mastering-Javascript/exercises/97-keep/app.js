// Write your function here
function keep(arr, num) {
  return arr.filter(function(i) {
    return i === num;
  });
}

console.log(keep([1, 2, 3, 2, 1], 2));