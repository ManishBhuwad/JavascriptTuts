// merging two arrays in one 

const array1 = [12, 43, 53, 54];
const array2 = [10, 20, 30, 40, 50];
const mergedArray =[];

// for(i=0 ; i<array1.length; i++){
//     mergedArray[i]=array1[i];
// }
// console.log(mergedArray);
// console.log(mergedArray.length)

// for(i = 0; i<array2.length; i++){
//     mergedArray[array1.length+i] = array2[i];
// }

// console.log(mergedArray);
// console.log(mergedArray.length)



// predefined method to merge two arrays

let newArray =[...array1,...array2];
console.log(newArray);