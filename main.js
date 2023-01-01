 // Modules
 // import playGuitar from "./guitars.js";
 // import { shredding as shred , plucking as fingerpicking } from "./guitars.js";

import * as Guitars from "./guitars.js";

console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

import User from "./user.js";

const me = new User("asilshah17@gmail.com" , "Asil");

console.log(me);
console.log(me.greeting());