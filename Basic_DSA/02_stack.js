 // stack 

 const stack = [];
 let stackLength = stack.length;
 let max = 5;

 function push(elem){
    stack[stackLength] = elem;
    console.log(stack);
    stackLength +=1;
 }

 function pop(){
    stack.length = stackLength-1;
    console.log(stack)
    stackLength-=1;
 }

 function showStack(){
    let str="";
    for (let index = 0; index < stack.length; index++) {
        str +=`${stack[index]} `;
        
    }

    console.log("stack elements are : ",str)

 }
 push(23);
 push(24);
 pop();
 pop();
 push(90)
 push(80)

 showStack()