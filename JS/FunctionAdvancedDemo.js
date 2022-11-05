//Functions as an argument
console.log("\n Functions as an Argument");
var add=(a,b) => {
    return a+b;
}

var subtract=(a,b) => {
    return a-b;
}

var data = (func) => {
    var num1=10;
    var num2=20;
    return func(num1,num2);
}

console.log(data(add));
console.log(data(subtract));

//Functions returning Functions
console.log("\n Functions returning Functions demo");
const multi = (integer) => (anotherInteger) => integer * anotherInteger;
const div = (integer) => (anotherInteger) => integer / anotherInteger;

const result1 = multi(10)(50); 
const result2= div(25)(5);

console.log(result1);
console.log(result2);

