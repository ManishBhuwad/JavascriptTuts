const arr = [1,2,3,4,5];
// console.log(arr);

// arr.forEach(function(number) {
//     console.log(number);
// });
console.log(arr.length);

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

const new_Array = "manish";
console.log(Array.from(new_Array));

const n1 = 33;
const n2 = 45;
const n3 = 49;

const number_array = Array.of(n1,n2,n3);
console.log(number_array);


// .concat() ==> the concat() method is used to merge two or more arrays.
// this method does not change the existing arrays, but instead returns new array.

const array1 = ['a','b','c','d'];
const array2 = ['e','f','g'];
const array0 = ['h','i','j'];
const array3 = array1.concat(array2,array0);
console.log(array3);


//Array.prototype.copyWithin() ===> the copyWithin() method shallow copies part of an array to another location in the same aaray and returns without modifying its length;
// Syntax ==>
// copyWithin(target) ; copyWithin(target, start);  copyWithin(target, start, end)

const arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.copyWithin(-1));
console.log(arr1.copyWithin(2, 1));
console.log(arr1.copyWithin(2, 3, 4));
