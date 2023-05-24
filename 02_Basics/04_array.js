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

// function to identify and print the number is prime or not;


// function check(n){
//     for(let i = 2; i<n; i++){
//         if(n%i!=0){
//             return true
//         }else{
//             continue;
//         }
//     }
// }

// function showPrime(n){
//  if(check(n)){
//     console.log('number is prime')
//  }else{
//     console.log('not prime')
//  }
// }

// check(21);


function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      console.log(i);  // a prime
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }

  showPrimes(11);