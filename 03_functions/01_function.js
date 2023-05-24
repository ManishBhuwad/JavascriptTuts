function sayHi(){
    console.log('hello');
}

let func = sayHi;

sayHi();


let sayName = function () {
        return 32;
};   /*===> why semicolon  a Function Expression is created here as function(…) {…} inside the assignment statement: 
let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.*/

let myfunc = sayName; 
console.log(myfunc());


// callback functions in javascript;

function ask(question){
    if(!question){
        no();
    }else{
        yes();
    }
}

function yes(){
    console.log('function yes is called');
    
}

function no(){
    console.log('function no is called');
}

function question(n){
    if(n==10){
        return true;
    }
}

ask(question(undefined));



// what if we pass object as the parameter to the function ;

// it will change the object property after the function is called;

function changeSome(theObject){
    theObject.Color = "Red";
}


const car = {
    Name : "Tata",
    Build : "1992",
    Color : "Blue"
}

console.log(car.Color);   // blue
changeSome(car);
console.log(car.Color); //red




// What if we pass array as the parameter to the function;
//it will manupulate the array 


function passArray(arr){
    arr[0] = 100;
}

const array = [12, 13, 23, 43, 53];

console.log(array);

passArray(array);

console.log(array);
