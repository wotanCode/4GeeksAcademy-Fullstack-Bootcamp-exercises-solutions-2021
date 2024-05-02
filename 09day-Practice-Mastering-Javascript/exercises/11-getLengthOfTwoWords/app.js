function getLengthOfTwoWords(word1, word2) {
  var x1 = word1;
  var x2 = word2;
  var leplus = x1.length+x2.length;
  return leplus;
}

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9