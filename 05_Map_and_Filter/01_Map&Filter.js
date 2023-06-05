const arr = [12, 43, 84, 93];

let newArr = arr.map((element)=>element + 11);

console.log(newArr);


// map function returns new array


//filter ----> filter returns new array;
//The filter() method creates a new array filled with elements that pass a test provided by a function.

const nums = [10, 20, 30, 40, 50];

let mul = nums.filter((value)=>value>20);

console.log(mul); // [30, 40, 50]


// some map code

// capitalize first letter of each string

const myStringArray = ["manish","akshay","amey", "sai"];

const capitalizeArray = myStringArray.map((char)=>{
        let el =char.charAt(0).toUpperCase();
        let letter = el+(char.slice(1));
        return letter;
})

// console.log(capitalizeArray);


//Given an array of objects representing people, extract only their names using the map function.

const peopleInfo = [
    {
        name : "manish",
        age : 23,
        from : "dapoli"
    },
    {
        name : "Akshay",
        age : 23,
        from : "Mumbai"
    },
    {
        name : "Amey",
        age : 23,
        from : "dapoli"
    },
    {
        name : "sai",
        age : 22,
        from : "Pune"
    }
]


peopleInfo.forEach(function(obj){
    for (const key in obj) {
       console.log(`${key}:${obj[key]}`);
    }
})


const NamesOfPeople = peopleInfo.map(element =>{
    return element.from;
})

console.log(NamesOfPeople);

// NamesOfPeople.forEach(key=>console.log(key));



// traversing object using for..in loop

let myObj = {
    name : "manish",
    age : 23,
    location : "dapoli"
};

for (const key in myObj) {
   if(myObj[key]=="manish"){
        myObj[key] = "rutuja";
   }
}

console.log(myObj)


//Given an array of numbers, return a new array containing the squares of each number using the map function.

const numArray = [1, 2, 3, 4, 5];

const squareNums = numArray.map(num=>num*num)

console.log(squareNums);

console.log(numArray)

//using for loop

for(let i = 0; i<numArray.length; i++){
    numArray[i] = numArray[i]*numArray[i];
}

console.log(numArray);