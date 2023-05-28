// while loop

let score = 10;
let i = 0;

while(i<=score){
    // console.log(`value is : ${i}`);
    i++;
}

const myArray = ['manish', 'amey', 'akshay', 'raj'];
let arr = 0;

while(arr<myArray.length){
    // console.log(myArray[arr]);
    arr++;
}


// DO while loop 

let num = 10
let j = 0
do{
    // console.log(num);
    j++
}while(j<num);


//High Order Array Loops

const nums = [12, 43, 54, 393];

for (const num of nums) {
    // console.log(num);
}

//for of loop on String 

let str = 'Hello World!';

for(const char of str){
    // console.log(`char of string is ${char}`);
}

//for of loop not work on Objects

const myObject = {
    js : "javascript",
    py : "Python",
    cpp : "c++"
}

// for (const [key,value] of myObject) {
//     console.log(key,value);
// }

for (const key in myObject) {
//   console.log(`${key} is file format for ${myObject[key]}`);
}



// for in loop on array

const newArr = ['js', 'java', 'python', 'html','css'];

for(const key in newArr){
    // console.log(key);  // this will print the index (key) of the array
    // console.log(newArr[key]);
}


// foreach loop on array

newArr.forEach((item)=>{
    console.log(item);
})

