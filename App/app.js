let greet = require('../modulos/greet1');
greet();

let greet2 = require('../modulos/greet2');
greet2.greet();

let greet2b = require('../modulos/greet2').greet;
greet2b();

let greet3 = require('../modulos/greet3');
let greet3b = require('../modulos/greet3');
greet3.greet();
console.log(greet3);
greet3.greeting = "Mensaje cambiado";
console.log(greet3b);
greet3.greet();

const Greet4 = require('../modulos/greet4');
let greet4 = new (Greet4);
let greet4b = new (Greet4);
greet4.greet();
console.log(greet4);
greet4.greeting = "Mensaje cambiado";
console.log(greet4b);
greet4.greet();


