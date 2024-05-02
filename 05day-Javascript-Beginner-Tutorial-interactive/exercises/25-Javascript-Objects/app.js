var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};




function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
    //Solucion con for anidados
    for (let i=0; i<=3; i++){
        for (let u=0; u<3; u++){
            sumOfAllLuckyNumbers = sumOfAllLuckyNumbers + anArray[u].lucky_numbers[i];
        }
    }
    //Si lo quisiera hacer con 3 fors diferentes es asi:
    /*  
    for (let i=0; i<=3; i++){
        sumOfAllLuckyNumbers = sumOfAllLuckyNumbers + anArray[0].lucky_numbers[i];
    }
    for (let i=0; i<=3; i++){
        sumOfAllLuckyNumbers = sumOfAllLuckyNumbers + anArray[1].lucky_numbers[i];
    }
    for (let i=0; i<=3; i++){
        sumOfAllLuckyNumbers = sumOfAllLuckyNumbers + anArray[2].lucky_numbers[i];
    }
     */
  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:
//Cambiado el numero de la suerte de Jon
person.lucky_numbers[3]= 33;
//Creando un nuevo miembro de la familia
var person3 = {
    name: "Jimmy",                //String
    lastname: "Doe",
    age: 13,                     //Number
    gender: "male",
    lucky_numbers: [ 1, 2, 3, 4], //Array
    significant_other: null   //Object, yes the same variable/object defined after
};
//Agregando un nuevo objeto a familia
family.members.push(person3);

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members));