// Q1. sort the array in ascending order

let nums = [12, 43, 6, 8, 20];

for(let i = 0; i<nums.length; i++){
    for(let j =0; j<nums.length-1; j++){
        if(nums[j]>nums[j+1]){
            let temp = nums[j];
            nums[j] = nums[j+1];
            nums[j+1] = temp;
        }
    }
}

console.log(nums);


// Q2. Reverse an array using recursive function:

const data = [45, 84, 34, 50, 40, 20];
let temp = 0;

function reverseFunc(start, data, end){
    console.log(data);
    if(start<=end){
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        reverseFunc(start+1, data, end-1);
    }

}

reverseFunc(0,data,data.length-1);

//Using while loop

const elements = [12, 3, 5, 6, 8, 9];
let tempt= 0;
let start = 0;
let end = elements.length-1;

while (start<end) {
    tempt = elements[start];
    elements[start]=elements[end];
    elements[end]=tempt;
    console.log(elements);
    end--;
    start++;
}


// Reverse array using forloop;

let set = [10, 20, 30, 40, 50];
let keeper = 0;
let endpoint = set.length;

for(let i = 0; i<set.length; i++){
    endpoint--;
    if(i<=endpoint){
        console.log(set);
        keeper = set[i];
        set[i]=set[endpoint];
        set[endpoint]= keeper;
    }else{
        break;
    }
    
}



// Merge two arrays

const numbers = [10, 20, 30, 40];
const anotherNumbers = [100, 200, 300, 400];
 
for(let i=0; i<anotherNumbers.length; i++){
    numbers[numbers.length] = anotherNumbers[i];
}

console.log(numbers);
console.log(numbers.length);