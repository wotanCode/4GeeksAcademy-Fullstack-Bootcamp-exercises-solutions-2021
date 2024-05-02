// Write your function here
var myObj = {
  myKey: ['It', 'has', 'some', 'words']
};

function getOddLengthWordsAtProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) {
    return [];
  }
  return obj[key].filter(function(i) { 
    return i.length % 2 !== 0;
  });
}

console.log(getOddLengthWordsAtProperty(myObj, 'myKey'));