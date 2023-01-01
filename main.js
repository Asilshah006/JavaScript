const view = document.querySelector("#view1");

view.style.display = "flex";

const myArray = ["eat" , "sleep" , "code" ];

const myObj = {
    name : "ASil",
    hobbies: ["eat" , "sleep" , "code" ],
    logname : function(){
        console.log(
        this.name
        );
    }
}


localStorage.setItem("mySessionStore" ,JSON.stringify(myObj));
//localStorage.removeItem("mySessionStore");
//localStorage.clear();
const key = localStorage.key(0);
const length = localStorage.length;
console.log(key);
console.log(length);
const mydata = JSON.parse(localStorage.getItem("mySessionStore"));
console.log(mydata);