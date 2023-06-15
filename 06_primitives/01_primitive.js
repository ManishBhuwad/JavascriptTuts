// there are 7 primitive type:
// string, number, bigInt, boolean, symbol, null and undefined


//Numbers:
//       (253-1) or be less than -(253-1)

//ways to write a number

// let billion = 1000000000;
//let billion = 1_000_000_000; // we can use _ as the seperator

// console.log(billion);


let twoBillion = 2e9 // 2 billion, literally: 2 and 9 zeros
console.log(twoBillion);

console.log(1.3e9); // 1.3 billion

// In other words, e multiplies the number by 1 with the given zeroes count.

console.log(1.3e3); //1300 => 1.3*1000
console.log(13e2); //1300  => 13*100

let mcs = 0.000001;
console.log(mcs);

//using "e" can help. if we'd like to avoid writing the zeros explicitly
console.log(1e-6); // five zeros to the left from 1