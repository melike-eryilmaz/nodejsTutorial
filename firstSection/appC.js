const appB = require('./appB')


console.log(appB.height);
appB.log(123);

console.log(__filename); //Çalıştığımız dosyanın tam yolunu verir.
console.log(__dirname); //Çalıştığımız dosyanın klasör yolunu verir.

/**
 * Node Built in module ler : 
 * File system module
 * Path Module
 * Events Module
 * Os Module
 * Http Module
 */