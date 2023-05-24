// Function Expressions

let square = function(number){
    return number * number;
}

console.log(square(2));


const factorial = function fac(n){  //The factorial function is defined using the function keyword and assigned to the variable fac.
    return n<2 ? 1 : n * fac(n-1);
}

console.log(factorial(5)); // 120



//something amazing 

function map(f, a){
    const result  = new Array(a.length);
    
    for(let i =0; i<a.length; i++){
        result[i]= f(a[i]);
    }

    return result;
}

const cube = function (x){
    return x*x*x;
}

const number = [0,1,2,3,4,5];

console.log(map(cube,number));