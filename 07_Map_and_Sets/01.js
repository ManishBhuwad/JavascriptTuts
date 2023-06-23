// Map and Set 

/*  
        > Objects are used for storing keyed collections;
        > Arrays are used for storing ordered collections.

Map : Map is a collection of keyed data items, just like an Object.
      But the main difference is that Map allows key of any type.

      Methods and properties are:

      . new Map() -- Creates the map.
      . map.set(key, value) -- stores the value by the key.
      . map.get(key) --  returns the value by the key, undefined if key doesn't exist in map
      . map.has(key) -- returns true if the key exists, false otherwise.
      . map.delete(key) -- removes the element (the/value pair) by the key
      . map.clear() -- removes everything from the map.
      . map.size -- returns the current element count.

*/

let map = new Map();

map.set('1', 'str1');  // a string key
map.set(1, 'num1');    // a numeric key
map.set(true, 'bool1'); // a boolean key

console.log(map);
console.log( map.get(1) ) // num1
console.log( map.get('1') ) // str1

console.log( map.size )  // 3

