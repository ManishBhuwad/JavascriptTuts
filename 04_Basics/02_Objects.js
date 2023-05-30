
let user = {
    name : 'manish',
    "last name" : "Bhuwad",
    age : 23
};

console.log(user.name); // manish

// console.log(user.last name) // this will throw compilation error we can't access the propety by string; so there is another method 

console.log(user["last name"]); // Bhuwad

console.log(user.age);


// we can access the property of object by variable

let key = "name";
console.log(user[key]); // manish

// but not work with dot . access

// console.log(user.key); // undefined


//let's take input from the user to display the object property

// let key2 = prompt("what do you want know about the user: ", "name");
 
// alert(user[key2]);


// how to delete any object property 

delete user['age'];

console.log(user);


//  Computed properties
//We can use square brackets in an object literal, when creating an object. That’s called computed properties.
// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.

let fruit = "banana";

const bag = {
    [fruit] : 5
};

console.log(bag.banana); // 5
// console.log(bag.apple); // undefined


// see another

let fruit2 = "apple";

bag[fruit2] = 6;

console.log(bag)



/* PROPERTY EXISTENCE TEST " in " operator ; */

let myObj = {
    name : "xyz",
    last_Name : 'xyzz',
    age : 30,
    test : undefined 
};


console.log("xyz" in myObj); // false , only property check 

console.log("name" in myObj); // true {in operator check the property is present or not in the object}
console.log("age" in myObj); // true , the property exist

let mykey = "age";
console.log(mykey in myObj); // true

console.log(myObj.test); //undefined
console.log("test" in myObj); // true , the property exist



/* for in loop */

let car = {
    model : "XUV",
    color : "Red",
    fuel : "petrol",
    launch : 2023,
}

for (const key in car) {
    // console.log(key); // returns the properties of the object;
    // console.log(car[key]); // returns the values of the properties

    console.log(`${key} : ${car[key]}`);
}


let codes = {
    01: "mumbai",
    08: "Ratnagiri",
    06: "Raigad",
    07: "Sindhudurg",
    12: "pune",
}

codes["09"]= "Hingoli"; // add the 09 property into the codes
// codes.05 = "some" // this will compile time error;
codes.dist = "sambhajinagar"; // this will add the dist prop into the codes;
console.log(codes);


/* following code :
    Number() ----> converts String into number,
    Math.trunc() ----> removes the decimal points,
    String() ----> converts the Number into String
*/

console.log(String(Math.trunc(Number("12"))));  //12 
console.log(String(Math.trunc(Number("+12")))); //12
console.log(String(Math.trunc(Number(12.4)))); //12


let nums = {
    one : 1,
    two : 2,
    three : 3,
    four : 4,
    five : 5,
}

let propertyToDelete = "five";

for(let key in nums){
    if(nums.hasOwnProperty(key) && key===propertyToDelete){
        console.log(key);
    }
}

for(let key in nums){
    if(key === propertyToDelete){
        delete nums[key];
    }
}


console.log(nums);