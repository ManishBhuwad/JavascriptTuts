/*  ------- Set --------

A set is a special type of collection - "set fo values"(without keys),
where each value may occur only once.

Its main methods are: 

    1. new Set([iterable]) - creates the set, and if an iterable object is
                            provided (usually an array), copies values from
                            it into the set.
    
    2. set.add(value) - adds a value, returns the set itself.
    3. set.delete(value) - removes the value, returns true if value existed
                           at the moment of the call, otherwise false.
    
    4. set.has(value) - returns true if the value is exists in the set, otherwise false.
    5. set.clear() - removes everything from the set.
    6. set.size - is the element count.

The main feature is that repeated calls of set.add(value) with the same value
don't do anything. That's the reason why each value appears in a set only once.

for example, we have visitors comming and we'd like to remember everyone.
But repeatedly visits should not lead to duplicates. A visitor must be "counted" only once.

set is just the right thing for that:

*/


let set = new Set();

let john = { name: "john"};
let pete = { name: "Pete"};
let mary = { name: "Mary"};

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log(set.size); //3

for(let user of set){
    console.log(user.name);  // john pete mary
}


/* ------------- Iteration over Set ---------------

we can loop over a set either with for..of or using forEach:

*/

let fruits = new Set(["oranges", "apple", "bananas"]);

for(let value of fruits) console.log(value) ;

// the same with forEach:
fruits.forEach((value, valueAgain, set)=>{
    console.log(`${value} : ${valueAgain}`);
})

/* 
Note : The callback function passed in forEach has 3 arguments :
      a. value, then the same value valueAgain, and then the target object.
      indeed, the same value appears in the arguments twice.

      that's for compatibilty with Map where the callback passed forEach has three
      arguments. Looks a bit strange, for sure. But this may help to replace Map with set in certain
      cases with ease, and vice versa.

 ------- Methods of Set --------

    set.keys() - returns an iterable object for values
    set.values() - same as set.keys(), for compatibility with Map
    set.entries() - returns an iterable object for entries [value, value], exists for compatibilty with Map

*/


