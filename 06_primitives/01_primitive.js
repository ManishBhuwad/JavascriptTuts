// there are 7 primitive type:
// string, number, bigInt, boolean, symbol, null and undefined


//Numbers:
//       (2^53-1) or be less than -(2^53-1)

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


// hexa decimal numbers
// shorter way to write them: 0x and then the number

console.log(0xff) // 255
console.log(0xFF) // 255 (the same, case doesn't matter)
console.log(0xf1);
console.log(0xEE); // 238


// BINARY AND OCTAL NUMERAL SYSTEMS ARE RARELY USED, BUT ALSO SUPPORTED
// USING THE 0b and 0o prefixes:
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

console.log(a == b); //true, the same number 255 at both the sides



// toString(base)
// the method num.toString(base) returns a string representation of num in the
// numeral system with the given base.

let num = 255;
console.log( num.toString(16));    //ff
console.log(num.toString(2));  //11111111
console.log(num.toString(8)); //377

// the base can vary from 2 to 36. By default it's 10

/* Common use cases for this are:
    . base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F
    
    .base=2 is mostly  for debugging bitwise operations,digits can be 0 or 1.

    .base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin
    alphabet is used to represent a number. A funny, but useful case for 
    36 is when we need to turn a long numeric identifier into something 
    shorter, for example to make a short url. Can simply represent it in 
    the numeral system with base 36.

*/
console.log(1245383..toString(36)); //qoxz
console.log((1245383).toString(36)); //qoxz
// console.log(1245383.toString(36)) //error the js implies the decimal part after the first dot
