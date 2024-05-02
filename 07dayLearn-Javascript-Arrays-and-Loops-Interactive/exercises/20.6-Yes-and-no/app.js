let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

var wokowiki = theBools.map(function(value){
    if (value==0)
        return "woko"
    if (value==1)
        return "wiki"
});
console.log(wokowiki);