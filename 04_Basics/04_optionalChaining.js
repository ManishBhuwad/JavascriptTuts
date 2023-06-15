//The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

let user = {};

console.log(user.name) // undefined
// console.log(user.name.street); //error

//to overcome this problem we can use ?. optional chaining

console.log(user.name?.street) // undefined instead of error as the user.name property doesnot exist

// ?. chaining check the left side is null or undefined is this true then it returns the undefined instead of executing further code


let isAdmin = {
    admin(){
        console.log("welcome admin")
    }
};

let anotherUser = {};

isAdmin.admin?.();  // welcome admin
anotherUser.admin?.(); // nothing happened
