const appB = require('./appB');
const path = require('path');
const url = require('url');

console.log(appB.height);
appB.log(123);

console.log("filename ",__filename); //Çalıştığımız dosyanın tam yolunu verir.
console.log("dirname ",__dirname); //Çalıştığımız dosyanın klasör yolunu verir.

/**
 * Node Built in module ler : 
 * File system module
 * Path Module
 * Events Module
 * Os Module
 * Http Module
 */

/**path modulü */

let result = path.resolve('app.js');
console.log("result",result);

result = path.extname('app.js');
console.log("extname",result)



result = path.parse(__filename);
console.log("parse",result);
console.log("parse",result.name);
console.log("parse",result.base);
console.log("parse",result.root);


/**URL module */
const address = 'https://www.btkakademi.gov.tr/portal/course/player/deliver/node-js-ile-web-programlama-14301?year=2019&month=mart'
let response = url.parse(address,true);
console.log("response",response);
console.log("hostname",response.hostname);
console.log("query",response.query.year);

