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