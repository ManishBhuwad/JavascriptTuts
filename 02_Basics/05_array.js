//Deleting element from the array;

const arr = [12, 43, 54, 38, 64, 28];
let position = 3;

for(let i = 0; i<arr.length; i++){
    if(i>=position){
        arr[i] = arr[i+1];
    }
}
arr.pop();
console.log(arr)


// another way to do 

function deleteElement(f,a){
    const arr = new Array(a.length-1);
    let position  = f;

    for(let i=0; i<arr.length; i++){
       if(i<position){
        arr[i]=a[i];
       }else if(i>=position){
        arr[i]=a[i+1];
       }
    }
    return arr;
}

const number = [12, 33, 53, 54,63, 50];
let pos = 2;
console.log(number);
console.log(deleteElement(pos, number));