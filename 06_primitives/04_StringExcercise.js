// Q1. write a function that returns the string with upperCased first character, for instance:

function ucFirst(str){
  
    return str = str.at(0).toUpperCase()+ str.slice(1);
}

console.log(ucFirst("manish"));
console.log(ucFirst('rutuja'));

//------------<<<<<<<>>>>>>>>>>------------


// Q2. Write a function to checkSpam(str) that returns true if str contians 'viagra' or 'xxx', otherwise false

function checkSpam(str){
    str = str.toLowerCase();

    if(str.includes('viagra')){
        return true + ` its a spam message`;
    }else if(str.includes('xxx')){
        return true
    }else{
        return false;
    }
}

console.log(checkSpam('buy xxxxxxxx'));
console.log(checkSpam('inocent rabbit'))



// Q3. Create a function truncate(Str, maxlength) that checks the length of the str and, if it exceeds maxlength-
// replaces the end of the str with ellipsis character "..." , to make its length to maxlength,
 
function truncate(str, maxlength){
    if(str.length<maxlength){
        return str;
    }else{
        return str = str.slice(0, maxlength)+'...'
    }
}

console.log(truncate("manish was very mad about rutuja" , 40));
