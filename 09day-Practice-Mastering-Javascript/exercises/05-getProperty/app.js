function getProperty(obj, key) {
    var x = obj[key];
        return(x);
}
var car = {model: 'Toyota'};
//var output = getProperty(car.model);
var output = getProperty(car, 'model');
console.log(output); // --> 'valor'