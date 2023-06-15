// Symbol is primitive data type use for making unique key

let id = Symbol("My Identifier");

let id1 = Symbol("My Identifier");

console.log(id === id1) // false

console.log(id.description); // My Identifier


let User = {
    name : "Manish",
}

let userId = Symbol("id");
User[userId] = 1;

console.log(User.id)// undefined
console.log(User[userId]) //1
console.log(User)

//for..in cannot show the Symbol of the object
for(key in User){
    console.log(User[key])  
}