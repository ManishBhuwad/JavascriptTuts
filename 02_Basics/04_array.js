// manupulating the array ==> Inserting element in the array;

let myArray = [ 12, 32, 42, 543, 54, 48, 39];
let newElement = 1000;
let position = 3;
console.log(myArray);

for(let i = myArray.length-1; i>=0; i--){
    if(i>=position){
        myArray[i+1]= myArray[i];
        if(position == i){
            myArray[i]=newElement;
        }
    }
}
console.log(myArray);