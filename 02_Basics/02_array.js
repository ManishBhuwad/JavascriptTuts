// Slice and Splice in javascript 

const arr = [2, 12, 4, 5, 34, 56, 64];

for(let i = 0; i<arr.length; i++){
    console.log(`${"element of array index: "}${[i]}${" is : "}${arr[i]}`);
}


// Traverse an array using the while loop
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}


//let's see for..of  loop this is another way to traverse the array

for(let num of arr){
    console.log(num);
}


// Multidimensional arrays

const arr2 = [
    ['abc', 23],
    ['xyz', 22],
    ['xsd', 21],
    ['zad', 38]
];

for(let i =0; i<arr2.length; i++){
    for(let j=0; j<arr2[i].length; j++){
       console.log(arr2[i][j]);
    }
}