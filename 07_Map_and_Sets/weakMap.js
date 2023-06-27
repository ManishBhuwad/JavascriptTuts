// WeakMap ----->

/* As we know from  Garbage collection, 
Javascript engine keeps a value in memory while it is "reachable" and can
potentially be used.

*/

let john  = { name: "john"};
 
// the object can be accessed, john is the reference to it

// overwrite the reference 
john = null;

// the object will be removed from the memory


/* 
Usually, properties of an object or elements of an array or anoher data
structures are considered reachable and kept in memory while that data structure
is in memory.

for instance, if we put an object into an array, then while the array is alive
the object will be alive as well, even if there are other references to it

*/

let rutuja = { name: "Rutuja"};

let array = [ rutuja ];

rutuja = null; // overwrite the reference

console.log(rutuja)
console.log(array[0])

// the object previously referenced by rutuja is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]





/* 
Similar to that, if we use an object as the key in a regular Map, then
while the Map exists, that object exists as well. it occupies memory and
may not be garbage collected.
*/

let manish = { name : "Manish"};

let map = new Map();
map.set(manish, "...")

manish = null; // overwrite the reference

console.log(map.keys(manish));

// manish is stored inside the map,
// we can get it by using map.keys()



/* ----------------- WeakMap -------------------

WeakMap is fundamentally different in this aspect.
it doesn't prevent garbage-collection of key objects.

the first difference between Map and WeakMap is that keys must be objects,not primitive values:

*/

let weakMap = new WeakMap();

let obj = {}

weakMap.set(obj, "ok"); // works fine (object key)
// weakMap.set("test","whoops")  // Error, can't use string as the key



/* 
Now, if we use an object as the key in it and there are no other reference
to that object - it will be removed from memory(and from the map) automatically.
*/

let fruit = { name: "banana"};

let weakMapp = new WeakMap();
weakMapp.set(fruit, "....");

console.log(weakMapp.has(fruit));  // true

fruit = null; // overwrite the reference

// john removed from the memory
console.log(weakMapp.has(fruit));  // false



/* ------------------ IMPORTANT -----------------

    WeakMap does not support iteration and Methods 
    keys()
    values()
    entries()
    so there is no way to get all keys or values from it

    WeakMap has only following methods
        weakMap.set(key, value)
        weakMap.get(key)
        weakMap.delete(key)
        weakMap.has(key)

*/



/*  ------------ Use Case : Additional data ----------

The main area of application for weakmap is an additional data storage.

*/

let visitsCountMap = new Map();

function countUser(user){
    let count = visitsCountMap.get(user) || 0;
    console.log(visitsCountMap.get(user))
    visitsCountMap.set(user, count+1);
}

let akshay = { name: "Akshay"};
let sai = { name: "Sai"};

// countUser(akshay)
countUser(akshay)
countUser(sai);
countUser(akshay)
sai = null;

console.log(visitsCountMap.entries())

/* sai should be garbage collected, but remains in memory, as it's key in
visitCountMap.

We need to clean visitCountMap when we remove users, otherwise it will grow
in memory indefinitely. Such cleaning can become a tedious task in complex architectures.

We can avoid it by switching to WeakMap instead:

*/

let visitCountMap2 = new WeakMap();

function countUserPlus(user){
    let count = visitCountMap2.get(user) || 0;
    visitCountMap2.set(user, count+1);
}

let smith = { name: "smith"};
let amit = {name : "amit"};

countUserPlus(smith);
countUserPlus(amit);

console.log(visitCountMap2.has(smith));
console.log(visitCountMap2.get(smith))
smith = null 

console.log(visitCountMap2.has(smith))
console.log(visitCountMap2.get(smith))