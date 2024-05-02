var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];


//hacer un loop
const mergeArrays = (firstArray, secondArray) => {
    let newArray = [];
    for (let i= 0; i < firstArray.length; i++){
        newArray.push(firstArray[i]);
    }
    for (let i= 0; i < secondArray.length; i++){
        newArray.push(secondArray[i]);
    }
    //newArray = [firstArray + secondArray];
    return newArray;
}

console.log(mergeArrays(chunk_one, chunk_two));