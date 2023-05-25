//Deleting element from the array;

const arr = [12, 43, 54, 38, 64, 28];
let position = 3;

for(let i = arr.length; i>=0; i--){
    if(i>=position){
        arr[i-1]=arr[i];
        if(i===position){
            continue;
        }
    }
}

console.log(arr)