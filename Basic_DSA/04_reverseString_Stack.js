// reverse a string using stack

const stack = [];
let currentSize = stack.length;

function push(item){
    stack[currentSize]=item;
    currentSize +=1;
}

function pop(){
    
    currentSize -=1;
    removedElement = stack[currentSize];
    stack.length = currentSize;
    return removedElement
}

function reverseStr(item){
    for(let i = 0; i<str.length; i++){
        push(item[i]);
    }

    for(let i = 0; i<str.length; i++){
       console.log(pop())
    }
}  

let str = "manish";
str = str.split("");
reverseStr(str);