const arr = ["manish","raj","sai","akshay","amey"];

console.log(arr.at(-1)) // amey, it will return the last element of the array
console.log(arr.pop()); // amey , it will return and remove the last element of the array
console.log(arr); // manish, raj, sai, akshay 


let fruits =["Apple", "Oranges"];

fruits.push("pear"); // add the pear at the end 
console.log(fruits); // ["Apple","Oranges","pear"];


// .pop() and .at(-1) return the last element of the array
// but .pop() also modifies the array by removing it.


// <<<<<<----- Methods that work with the beginning of the array ----->>>>

// 1. shift -- extract the first element of the array and return it

let friends = ["amey","akshay","sai","raj"];
console.log(friends.shift()) // amey
console.log(friends) // akshay, sai, raj

// 2. unshift -- add the element to the beginning of the array

friends.unshift("shubham");
console.log(friends) // shubham, akshay, sai, raj



//......... push and unshift ..........
// these methods can add multiple elements at once:

let colors = ["red","blue"];

colors.push("orange","green") 
console.log(colors) // red, blue, orange, green

colors.unshift("white","pink") //white, pink, red, blue , orange, green
console.log(colors)