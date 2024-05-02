var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    let nuevopeople = [];
    //your code here
    for (let i = 0; i < people.length; i++){
        if (people[i] != personName){
            nuevopeople.push(people[i]);
        }
    }
    return nuevopeople;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));