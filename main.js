// Functions

function sum(a,b){
    console.log(a);
    console.log(b);

    if(b === undefined){
        return a+a;
    }
    return a+b;
}

console.log(sum(4))

function getUserNameFromEmail(email){
return email.slice(0,email.indexOf("@"));
}
console.log(getUserNameFromEmail("asilshah17@gmail.com"))






const getUserNameFromEmail1 = function (email){
return email.slice(0,email.indexOf("@"));
}

console.log(getUserNameFromEmail1("Hunainshah17@gmail.com"))







const getUserNameFromEmail2 = (email) =>{
return email.slice(0,email.indexOf("@"));
}

console.log(getUserNameFromEmail2("Laraibshah17@gmail.com"))





const toProperCase = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(toProperCase("september"))