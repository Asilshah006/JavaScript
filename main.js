
"use strict";

// variable = "asil";


// const abc = 584;

// abc = 58;


//Object..create();

// const makeError = ()=> {
//     try{
//         const name = "Dave";
//         name = "Joe";
//     }catch(err){
//         console.error(err.message);
//     }
// }



function customError(message){
    this.message = message;
    this.name = "CustomError";
    this.stack = `${this.name} ${this.message} `
}   

// const makeError = ()=> {
//     try{
//        throw new customError("This is Error");
//     }catch(err){
//         console.error(err.message);
//         console.log(err.name);
//         console.log(err.stack);
//     }
// }


const makeError = ()=> {
    let i = 1;
    while(i <= 5){

    try{
        if(i % 2 !== 0){
       throw new customError("This is Odd Number");
        }
        console.log("Even Number");
    }catch(err){
        console.error(err.stack);
       
    }finally{
        console.log("...Finally");
        i++;
    }
    } 
};

makeError();