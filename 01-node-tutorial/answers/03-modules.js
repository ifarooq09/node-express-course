const names = require("./04-names.js");
const sayHi = require("./05-utils.js");
const alternative = require("./06-alternative-flavor.js");
require("./07-mind-grenade.js");

sayHi("Susan");
sayHi(names.ibrahim);
sayHi(names.kumar);
sayHi(names.smith);

console.log(alternative.items);
console.log(alternative.person);
