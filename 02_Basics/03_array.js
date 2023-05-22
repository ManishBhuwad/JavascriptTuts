//finding smallest and largest element in the array

const arrayofnumber = [12, 32, 54, 43, 63, 22, 11, 9];

console.log(arrayofnumber.length)

let max = arrayofnumber[0];

// for(let i =0; i<1;i++){
//     max = arrayofnumber[i]
//     for(let j=1; j<arrayofnumber.length; j++){
//         if(max<arrayofnumber[j]){
//             max=arrayofnumber[j];
//         }
//     }
// }


for(let i =1; i<arrayofnumber.length; i++){
    if(arrayofnumber[i]>max){
        max=arrayofnumber[i];
    }
}

console.log(max);
