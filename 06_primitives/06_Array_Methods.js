
// Array Methods 

/* 1. splice() :-

how to delete an element from the array ?
the arrays are object, so we can try to use delete:
the element get deleted but the array still has the empty element there;

that's natural because delete obj.key removes  a value by the key.
it's all it does. fine for objects. But for arrays we usually want 
the rest of the elements to shift and ocuupy the freed place.
we expect to have a shorter array now.

so special method should be used.
that is array.splice()

*/

let arr = ['I', 'go','home'];

delete arr[1];
console.log(arr[1]); // undefined
console.log(arr.length); // still the lenght is 3
console.log(arr); // [ 'I', <1 empty item>, 'home' ]




/* --------- splice()---------

syntax is : 
            arr.splice(start[, deleteCount, elem1, ..., elemN])

*/

let  fruits = ["mango","apple","orange"];
console.log(fruits)

let removed = fruits.splice(0, 1); // from index 0 remove 1 element;
console.log(fruits) // apple, orange
console.log(removed) // mango , splice() returns remove elements


// we can remove and replace them with new items

let myArr = ["I", "study","JavaScript","right","now"];

// remove 3 first elements and replace them with another
myArr.splice(0,3, "let's","dance");

console.log(myArr); // [let's, dance, right, now]

// The splice method is also able to insert the elements without any removal
// set deleteCount to 0;

let myArr2 = ["I","study","JavaScript"];

//from index 2
// delete 0
// then insert "complex" and "language"
myArr2.splice(2, 0, "complex","language");

console.log(myArr2);


// -------- Negative indexes allowed ---------

// here and in other array methods, negative indexes are allowed.
// thery specify the position from the end of the array, like here:

let numArr = [1, 2, 5];

//from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
numArr.splice(-1, 0, 3, 4);

console.log(numArr) // 1, 2, 3, 4, 5;




/* ------------- slice() ---------------

the method arr.slice is much simpler than similar looking arr.splice.
the syntax is:

            arr.slice([start], [end]);

it returns a new array coppying to it all items from index start to end
(not including end). Both start and end can be negative, in that case position
from array end is assumed.

it's similar to a string method str.slice, but instead of substring it makes
subarrays

*/

let test = ["t","e","s","t"];

console.log(test.slice(1,3)) // e,s (copy from 1 to 3);
console.log(test); // t,e,s,t  (the original array remain unchanged);
console.log( test.slice(-2)) // s,t (copy from -2 till the end)



/* -------------- CONCAT ---------------

the method arr.concat creates a new array that includes values from other
arrays and additional items.

syntax :
        arr.concat(arg1, arg2.....)

it accepts any number of arguments - either arrays or values.
The result is anew array cotaining items from arr, then arg1, arg2 etc.
if an argument argN is an array, then all its elements are copied,
otherwise, the argument itself is copied.

*/

let conArr = [1, 2,3];

console.log(conArr.concat([3, 4])); // 1,2,3,4

console.log(conArr.concat([5,6])) // 1,2,5,6

console.log(conArr.concat([3,4],[5,6])) // 1,2,3,4,5,6

console.log(conArr.concat([3,4],10,12)) // 1,2,3,4,10,12

// Normally, it only copies elements from arrays. other objects, even
// if they look like arrays, are added as a whole:

let arrayLike = {
    0: "something",
    length: 1
};

console.log(conArr.concat(arrayLike)); // 1, 2, [object Object]

// But if an array-like object has a special Symbol.isConcatSpreadable
// property, then it's treated as an array by concat : its elements are added

let anotherArrayLike = {
    0: "something",
    1: "else",
    2: "nothing",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    
}

console.log(conArr.concat(anotherArrayLike));
