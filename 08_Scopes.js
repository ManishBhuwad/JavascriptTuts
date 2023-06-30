
// you can declare the function inside the function but you have to call it from the outerfunction 


function outerfunction(){
    console.log("this is outerfunction");

    function innerFunction(){
        console.log("Inner function")
    }

    innerFunction(); // call to the inner function 
}


outerfunction()


// or you can used immediate invoked function expression

function outer(){
    console.log("outer");

    (function(){
        console.log("inner IIFE")  
    }());   
}

outer()


// let's see function expression

let manish = function (){
    console.log('call my name')
}

manish()


// arrow function 

const greet = ()=>console.log("welcome guys")

greet()

// you can pass the parameter as well 

const newGreet = (name)=>{
    console.log(`hello ${name}`)
}

newGreet('rutuja')