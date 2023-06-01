const arr = [12, 43, 84, 93];

let newArr = arr.map((element)=>element + 11);

console.log(newArr);


// map function returns new array


//filter ----> filter returns new array;
//The filter() method creates a new array filled with elements that pass a test provided by a function.

const nums = [10, 20, 30, 40, 50];

let mul = nums.filter((value)=>value>20);

console.log(mul);