function findMaxLengthOfThreeWords(word1, word2, word3) {
  
  if (word1.length > word2.length) {
      if (word1.length > word3.length) {
        return word1.length;
      }else {
       return word3.length;
      }
  }else {
    if(word2.length > word3.length) {
      return word2.length;
    }else {
      return word3.length;
    }
  }
  
}
var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1