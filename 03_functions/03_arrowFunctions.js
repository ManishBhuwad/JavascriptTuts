// how arrow function is defined
// let func = (arg1, arg2, ..., argN) => expression;


let func = (a, b) => a+b;

console.log(func(2,4));


let sayHello = () => console.log("Hello everyone");

sayHello();


let age = 13;

let welcome = (age>=18) ? 
            ()=> console.log("Hello"):
            ()=> console.log("Greeting");

welcome();


//Multiline Arrow function

let makeTea = (water , chaiPowder, Sugar)=>{
    let tea = water + chaiPowder + Sugar;

    if(tea > 70){
        console.log("Tea is too sweet  " + tea);
    }else if(tea<70 && tea> 45){
        console.log("Tea is perfect " + tea);
    }else{
        console.log("tea is not good , Add some sugar " + tea);
    }
}

makeTea(30, 10, 10);