// search an element in the array

const arr = [12, 32, 498, 20, 383, 934, 20, 293, 893, 280]
const searchElement = 20;
let index;

for(let i =0 ; i<arr.length; i++){
    if(arr[i]===searchElement){
       index = i;
    //    break;
    }
}

console.log(index); // 6 if there are two same elements in the array it will return the index of the last one if we not use break;
                    //3 if we use the break;


// javascript predefined property for search element in the array

console.log(arr.indexOf(20)); // 3  it returns the first 20 got in the array;
