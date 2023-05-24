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





