let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
// your code here
for(let i in par){
    let letras= par[i].toLowerCase();
    if (letras == ' '){
        //Si las condiciones son iguales no hagas nada
    }    
    else {
        if (counts[letras] == undefined){
            counts[letras] = 1;
        }
        else{
            counts[letras] = counts[letras] + 1;
        }
    }
}


console.log(counts);