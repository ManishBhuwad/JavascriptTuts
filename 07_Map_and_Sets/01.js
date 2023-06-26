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


// As we can see, unlike objects, keys are not converted to string.
// Any type of key is possible.

// Map can aslo use objects as keys.

let john = {name: "John"};

let visitsCountMap = new Map();

visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john)) // 123


/* Using objects as keys is one of the most notable and important Map features.
The same does not count for the object.
String as a key in Object is fine, but we can't use another Object as a
key in Object.

*/

let sam = { name: "Sam"};
let ben = { name: "Ben"};

let visitCountObj = {};  // try to use an object

visitCountObj[ben]= 234; // try to use ben object as the key
visitCountObj[sam] = 500; // try to use sam object as the key, ben object get replaced

console.log(visitCountObj["[object Object]"]); // 500


/* As visitCountObj is an object, it converts all Object keys, such as sam and ben
 above, to same string "[object Object]". Definitely not what we want.

*/


// Chaining :  Every map.set call returns the map itself, so we can "chain" the calls

let testMap = new Map();

testMap.set('2', 'str1')
      .set(11, 'num11')
      .set(true, 'booleanValue');

console.log(testMap.get('2')); // str1


/* ---------- Iteration over Map ----------

      For looping over a map, there are 3 methods:

      1. map.keys() - returns an iterable for keys,
      2. map.values() - returns an iterable for values,
      3. map.entries() - returns an iterable for entries[key, vlaue], it's used by default in for..of.

*/


let recipeMap = new Map([
      ['cucumber', 500],
      ['tomatoes', 350],
      ['onion', 50]
]);

// iterate over keys (vegetables)

for(let vegetables of recipeMap.keys()){
      console.log(vegetables); // cucumber, tomatoes, onion
}
 

// iterate over values (amounts)

for(let amount of recipeMap.values()){
      console.log(amount); // 500, 350, 50
}


// iterate over [key, value] entries

for(let entry of recipeMap){
      console.log(entry) 
}


// Besides that, map has a built-in forEach method, similar to Array:

//runs the function for each (key value) pair
recipeMap.forEach((value, key, map)=>{
      console.log(`${key} : ${value}`); 
})



/*  ------------    Object.entries: Map from Object -------------- */

let obj = {
      name:  "Om",
      age: 20,
};

let nameMap = new Map(Object.entries(obj));

console.log(nameMap.get('name')); // Om

// here, Object.entries returns the array of key/value pairs: [["name","Om"],["age",20]].that's what Map needs



/* ----------     Object.fromEntries : Object from Map  ------------*/

// there's Object.fromEntries method does the reverse : given an array of [key, value] pairs,
// it creates an object from them:

let prices = Object.fromEntries([
      ['banana', 1],
      ['orange', 2],
      ['apple' , 5]
]);

// Now prices = {banana: 1, orange: 2, apple: 5}

console.log(prices.orange); // 2
console.log(prices['apple']) // 5
// console.log(prices[banana]) //error

/*
 We can use Object.fromEntries to get a plain object from Map.
 E.g. We store the data in a Map, but we need to pass it to a 3rd-party code
 that expects a plain object.
 Here we go:
*/

let fruitMap = new Map();
fruitMap.set('cashue', 1)
      .set('mango', 10)
      .set('grapes', 20);

let ObjFruits = Object.fromEntries(fruitMap.entries());

// ObjFruits = { cashue: 1, mango: 10, grapes: 20 }

console.log(ObjFruits.grapes) // 20
