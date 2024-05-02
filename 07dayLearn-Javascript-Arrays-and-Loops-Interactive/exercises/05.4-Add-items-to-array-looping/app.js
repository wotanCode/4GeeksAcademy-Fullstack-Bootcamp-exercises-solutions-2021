var arr = [4,5,734,43,45];

//*****************
// Your code here
function random(){
    let valorandom = Math.floor(Math.random()*10);
    return valorandom;
}
for (let i=0;i<10; i++){
    arr.push(random());
}
// you need to loop 10 times, for example, using a for loop
// for(let i = 0; i<10;i++){
//         your loop content here   
// }
//*****************

console.log(arr);