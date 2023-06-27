/* ------------- JSON (JavaScript Object Notation) --------

the JSON is a general format to represent values and objects.
initially it was made for javascript, but many other languages have libraries
to handle it as well. So it's easy to use JSON for data exchange when
the client uses javasript and the server is written on Ruby/PHP/java/Whatever.


        JavaScript provides Methods:
     JSON.stringify ----> to convert object into JSON.
     JSON.parse     ----> to convert JSON back into an object.

*/

let student = {
    name: 'Rutuja',
    age: 22,
    isAdmin: true,
    courses: ['chemistry', 'biology', 'typing'],
    cute: "too much",
    arrogant : null
}

let json = JSON.stringify(student);

console.log(typeof json) // String
console.log(json) 


/* 
Point to be noted --->
        1.String use double quotes, No single quotes or backticks in JSON.
          so 'Rutuja' becomes "Rutuja".
        
        2. Object property names are double-quoted also. that's obligatory.
           so age: 22 becomes "age" : 22



        JSON supports Following Data Types :

        1. Objects {...}
        2. Arrays [....]
        3. Primitives:
            . String
            . numbers
            . boolean values true/false
            . null.

*/


/* 
JSON is data-only language-independent specification, so some javascript
-specific object properties are skepped by JSON.stringify.

Namely: 
        . Function properties(methods)
        . Symbolic Keys and values.
        . Propeties that store undefined.

*/

let user = {
    sayHi(){  //ignored
        console.log("hello");
    },
    [Symbol("id")] : 123, // ignored
    something: undefined // ignored
};

console.log(JSON.stringify(user)); // {}



// Nested Objects are supported and converted automatically.

let meetup = {
    title : "conference",
    room : {
        number: 23,
        participants: ["john" , "ann"]
    }
}


console.log(JSON.stringify(meetup)); // whole structure is stringified


// +++++++++++++ IMPORTANT LIMITATION : there must be no circular references

let room = {
    number : 24
};

let grandMeetup = {
    title: "Grand Conference",
    participants : ["anna","Mia khalifa","dannie Daniels"]
};

grandMeetup.place = room; // grandMeetup references room
room.occupiedBy = grandMeetup; // room references grandMeetup

// JSON.stringify(grandMeetup); // Error Converting circular structure to JSON





/* :::::::::::::::::: Excluding and transforming : replacer 

    the full syntax of JSON.stringify is:
        JSON.stringify(value,[replacer, space])
    
value ====> A value to encode

replacer ====> Array of properties to encode or a mapping function function(key, value).

space ===> Amount of space to use for formatting


Most of the time JSON.stringify is used with the first argument only. But if we need
to fine-tune the replacement process, like to filter out circular references, 
we can use the second argument of JSON.stringify.

If we pass an array of properties to it, only these properties will be encoded

*/


let hotelRoom = {
    number: 888,
};

let party = {
    title: "Beer party",
    participants : [{name: "Raj"},{name: "Gangya"}],
    place: hotelRoom,
};

hotelRoom.occupiedBy = party // hotelRoom reference to party

console.log( JSON.stringify(party,['title','participants']) );
//{"title":"Beer party","participants":[{},{}]}

// Here the objects in participants are empty, because name is not in the list

console.log(JSON.stringify(party,['title','participants','place','name','number']))