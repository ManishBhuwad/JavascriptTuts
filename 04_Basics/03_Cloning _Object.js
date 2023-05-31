// cloning or copying the object

/* as we know that object are stored and coppied by reference;
    where as primitives  are coppied whole value ;
*/

// copying an object variable creates one more reference to the same object.

const myObj = {
    name : "manish",
};

let obj2 = myObj ; // the object is not coppied to obj the now the obj2 become another reference to the object;

console.log(obj2);

// we can change property of the object by reference 2 ;

obj2.name = "rutuja";

console.log(myObj); // rutuja


// what if we need to duplicate an object?
/* 
   We can create a new object and replicate the structure of the existing one,
   by iterating over its properties and copying them on the primitive level.
*/

const user = {
    name : "john",
    age : 30,
};

const clone ={};

for (const key in user) {
    clone[key] = user[key];
}

console.log(clone);

clone.name = "siri"

console.log(clone.name); // siri

console.log(user.name); // still john in the original object 


// WE CAN ALSO USE METHOD --> Object.assign

// Syntax : Object.assign(dest, ...sources)

const original = {
    name : "akshay",
    age : 23,
};

const duplicate = {};

Object.assign(duplicate, original);

console.log(duplicate);

let duplicate2 = Object.assign({}, original); // object coppied

duplicate2.name = "Amey";

console.log(duplicate2);