// Rounding
/*
    Math.floor --> Rounds down:3.1 becomes 3,
                   and -1.1 becomes -2.


    Math.ceil --> Rounds up: 3.1 becomes 4,
                  and the -1.1 becomes -1;

    Math.round --> rounds to nearest integer
                3.1 becomes 3,
                3.6 becomes 4,

    Math.trunc (not supported by Internet explorer);
    Removes anything after the decimal point without rounding:
                3.1 becomes 3
                3.6 becomes 3
                -1.1 becomes -1

*/

//we have to 1.2345 and want to round it to 2 digits, getting only 1.23.
//there are two ways to do so:

//multiply-and-divide.
let num = 1.2345;
console.log(Math.round(num * 100)/100) //1.23


//The method toFixed(n) rounds the number to n digits after the point
// and returns a string representation of the result.

let x = num.toFixed(2);

console.log(x) // 1.23 but type is string not a number
console.log(typeof x);  //string

// to change type we can do it with 
let z = Number(num.toFixed(2));
console.log(typeof z); // number

 

//Imprecise calculations

console.log(1e500); // Infinity

console.log(0.1 + 0.2 == 0.3) // false
// the reason is
console.log(0.1 + 0.2); // 0.3000000000000004

let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2)); //0.3




// Tests : isFinite and isNaN

// 1. isNaN(value) converts it's argument to a number and then tests it for being NaN

console.log(isNaN(NaN));  // true NaN is not a number(NaN)
console.log(isNaN("str")); //true str is not a number(NaN)
console.log(isNaN("12")); //false , string 12 is first converted to number then test

console.log(NaN === NaN); // false , the value NaN is unique in that it does not equal anything, including itself


// 2. isFinite(value) converts its agrument to number and returns "true" if it's a regular number
// not NaN/Infinity/ -Infinity

console.log(isFinite("15")); //true
console.log(isFinite("str")); //false, because a special value: NaN
console.log( isFinite(Infinity)); //false, because a special value: Infinity



//parseInt and parseFloat

//Numeric conversion using a plus + or Number() is stric ,
// if a value is not exactly a number, it fails:

console.log(+"100px") //NaN
console.log(Number("100px")); //NaN

console.log( parseInt("100px")); //100
console.log( parseFloat("12.5em")) //12.5

console.log( parseInt('12.3')); // 12, only the integer part is returned
console.log( parseFloat('12.3.4')) // 12.3 , the second point stops the reading


//there are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read
console.log( parseInt('a123')) // NaN the first symbol stops the process