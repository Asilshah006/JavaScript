 // Modules
 // import playGuitar from "./guitars.js";
 // import { shredding as shred , plucking as fingerpicking } from "./guitars.js";

import * as Guitars from "./guitars.js";
console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

import User from "./user.js";

const me = new User("asilshah17@gmail.com" , "Asil");

console.log(me);
console.log(me.greeting());
import { posts } from "./posts.js";

// const name = (post)=>{
//     return post.userId === 1
// }

// const filter = posts.filter(name)

const filter = posts.filter((post)=>{
    return post.userId === 2;
})
console.log(filter)

const mapping = filter.map((post)=>{
    return post.id + 100
})

console.log(mapping);
const reduce = mapping.reduce((sum , post )=>{
    return sum;

});




