// class Pizza {
//     constructor(size , type){
//         this.size  = size;
//         this.crust = "Original";
//         this.type = type;
//         this.toppings = [];
//     }

//     getCrust(){
//         return this.crust;
//     }

//     setCrust(crust){
//         this.crust = crust;
//     }

//     setToppings(toppings){
//         this.toppings.push(toppings);
//     }

//     getToppings(){
//         return this.toppings;
//     }

//     bake(){
//         return `Baking a ${this.size} size ${this.type} ${this.crust} crust pizza`;
//     }
// }

// const mypizza = new Pizza("Small" , "Supreme");
//     mypizza.setCrust("thin");
//     console.log(mypizza.bake());
//     mypizza.setToppings("Olives");
//     mypizza.setToppings("Sausage");
//     console.log(mypizza.getCrust());
//     console.log(mypizza.getToppings);

// class Pizza {
//     constructor(size){
//         this.size  = size;
//         this.crust = "Original";
       
//     }

//     bake(){
//         return `Baking a ${this.size} size ${this.type} ${this.crust} crust pizza`;
//     }

//     setCrust(crust){
//         this.crust = crust;
//     }

//     getCrust(){
//         return this.crust;
//     }
// }


// //Inheritence
// class SpecialityPizza extends Pizza{
//     constructor(size){
//         super(size);
//         this.type  = "The Works";
//     }
//     slice(){
//         console.log(`Our ${this.type} ${this.size} size pizza have 8 slices`);
//     }
// }

// const mySpecial = new SpecialityPizza("medium");
// mySpecial.slice();




//Factory Funtion for Private fields

// function pizzaFactory(pizzaSize){
//     const crust = "Original";
//     const size = pizzaSize;
    
//     return{
//         bake: () => console.log(`Baking a ${size} size ${crust} crust Pizza`)
//     };
// }

// const pizza = pizzaFactory("small");
// pizza.bake();





class Pizza {
    crust = "original";
    #sauce = "Traditional";
    #size;
    constructor(size){
        this.#size  = size;
    }

    bake(){
        return `Baking a ${this.size} size ${this.type} ${this.#sauce} sauce ${this.crust} crust pizza`;
    }

    setCrust(crust){
        this.crust = crust;
    }

    getCrust(){
        return this.crust;
    }
}

const pi = new Pizza("small");

 console.log(pi.bake());
    console.log(pi.size);
    console.log(pi.sauce);
