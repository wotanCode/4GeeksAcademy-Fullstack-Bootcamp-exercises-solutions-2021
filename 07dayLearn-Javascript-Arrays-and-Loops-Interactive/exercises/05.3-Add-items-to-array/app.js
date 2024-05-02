var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.
function randomize(){
    let value= Math.floor(Math.random()*20);
    return value;
}
arr.push(randomize());
arr.push(randomize());
console.log(arr);