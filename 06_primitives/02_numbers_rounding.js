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
console.log(typeof x);

// to change type we can do it with 
let z = Number(num.toFixed(2));
console.log(typeof z); // number
