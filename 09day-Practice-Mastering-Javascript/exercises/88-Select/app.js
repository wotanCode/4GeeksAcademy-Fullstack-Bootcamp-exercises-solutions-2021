// Write your function here
function select(arr, obj) {
  var newObj = {};
  for (let key in obj) {
    arr.forEach(function(i) {
      if (key === i) {
        newObj[key] = obj[key];
      }
    });
  }
  return newObj;
}

var arr= ['a', 'c', 'e'];
var obj= {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
console.log(select(arr, obj));
