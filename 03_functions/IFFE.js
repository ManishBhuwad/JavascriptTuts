//let's see what is IIFE ==> Imediately invoked function expression 

(function(){
    console.log('this is the 1st IFFE');
})();

/* 
1. here the first () where the function is bind prevent accessing the variable within the IFFE idiom as well as 
    polluting the global scope; 

2. The second () is to call the function;

() ------> is also called as grouping operator, it acts like container;

*/

(()=>{
    console.log('this is the second way of declaring IFFE');
})();

(function myfunc(num, num2){
    console.log('this is also valid, even you can pass the parameters')
    console.log(num + num2);
})(12, 23); //-----> here you pass the arguments

(async()=>{
    console.log("this is another way, I don't know what is this async stands for")
})();

