// var , let and const


// var x = 2;
// var x = 3;

// console.log(x);


// let y = 2;
// let y = 3;

// console.log(y);


// const x = 1;
// x =3;
// console.log(x);


// Global Scope

// var x =1;
// let y = 2;
// const z = 3;



// // Local Scope
// // {
//         console.log(x);
// //     let a =2
// //     console.log(a);
// // }

// console.log(a);





var x = 1 ;
let y = 2;
const z = 3;

console.log("Global : " +x);
console.log("Global : " +y);
console.log("Global : " +z);

function myFunc(){
    var x = 10; // Function Scoped
    const z = 5; // Block Scoped

    
    {
        var x = 3;
        const z = 6;
        console.log("Block : " +x);
        console.log("Block : " +y);
        console.log("Block : " +z);
        
    }
    console.log("Function : " +x);
    console.log("Function : " +y);
    console.log("Function : " +z);
}


myFunc();
