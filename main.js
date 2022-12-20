// let myobj = {
//     name : "Dave",
//     answer : 42,
//     alive : true,
//     Hobbies : ["Eat" , "Sleep" , "Code"],
//     Beverages : {
//         morning : "Coffee",
//         afternoon : "Iced Tea"
//     },
//         action : function() {
//         return `Time for ${myobj.Beverages.afternoon}`;
//     } 

    
// };

//     console.log(myobj.action());


// const vehicle = {
//     wheels: 4,
//     engine : function(){
//         return "Vrrrooom";
//     }

// }

// const truck = Object.create(vehicle);

// truck.doors = 2;
// console.log(truck.wheels);
// console.log(truck.doors);
// console.log(truck.engine());




// const car = Object.create(vehicle);

// car.doors = 4;
// car.engine = function() { 
//     return "Whooosh";
// }

// console.log(car.doors);
// console.log(car.engine());





// const tesla = Object.create(car);

// tesla.engine = function(){
//     return "Sssshhhhh";
// }

// console.log(tesla.wheels);
// console.log(tesla.engine());


const band = {
    vocals : "Robert plant",
    guitar : "Jimmy Page",
    bass : "John Paul Jones",
    drums : "John Boonham" 
};

// delete band.drums;
// console.log(band.hasOwnProperty("drums"));

// console.log(Object.keys(band));
// console.log(Object.values(band));

// for (let job in band){
//     //console.log(band[job]);
//     console.log(`On ${job}, its ${band[job]} `);
// }




// destructuring Objects

// const {guitar : myvariable , vocals : vocal} = band;

// console.log(myvariable);
// console.log(vocal);

const {vocals , guitar , bass , drums} = band;

console.log(vocals);

function sings({vocals}){
    return `${vocals} Sings!`;
}

console.log(sings(band));