//STRINGS ---->

// In javscript, the textual data stored as strings.
// there is no seperate type for a single character

/*   ---- Quotes -------

    Strings can be enclosed within either single quotes,
    double quotes or backticks:
*/

let single = 'single-quoted'
let double = "double-quoted"
let backticks = `backticks`

// single and double quoted are essentially the same,
// Backticks, however, allow us to embed any expression
// into the string, by wrapping it in ${...}

function sum(a, b){
    return a+b;
}

console.log(`a + b = ${sum(1,2)} `);  // 1 + 2 = 3

//Another advantage of using backticks is that they allow a string to span multiple lines:

let guestList = `Guests:
* john
* pete
* Mary
`;

console.log(guestList);

// But Single or double quotes do not work this way.
// If we use them and try to use multiple lines, there'll be an error:

// let guestList2 = "Guests:  // Error: Unexpected token ILLEGAL
//   * john";  
