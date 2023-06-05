// reduce

const arr = [1, 2, 3, 4, 5];

let newArr = arr.reduce(function(acc, currVal){

    return acc + currVal;
})

console.log(newArr);