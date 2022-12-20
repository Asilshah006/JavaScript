const myobj ={
    name : "Asil",
    answer : 42,
    Hobbies : ["Eat" , "Sleep" , "Code"],
    action : function(){
        return "Hello";
    }
}

console.log(myobj.name);
console.log(myobj.answer);
console.log(myobj.Hobbies);
console.log(myobj.action());

const sendJSON = JSON.stringify(myobj);

console.log(sendJSON);
console.log(typeof sendJSON);

const recieveJSON = JSON.parse(sendJSON);
console.log(recieveJSON);
console.log(typeof recieveJSON);