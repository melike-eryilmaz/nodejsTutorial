const appB = require('./appB');
const path = require('path');
const url = require('url');
const fs = require('fs');

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

/**path module */

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


/**File system module */
/*Read files in the dir */
const files = fs.readdir('./',function(error,data){
    if(error){
        console.log("error",error);
    }else{
        console.log("data",data);
    }
});

/**Read files */
const data = fs.readFile('index.html','utf-8',function(error,data){
    if(error){
        console.log(error);
    }else{
        console.log("data",data);
    }
})

/**write file */
/**İf file exists ,It deletes file content and adds new content. */
fs.writeFile('deneme.txt','Hello nodejs.. :)',function(error,data){
    if(error){
        console.log(error);
    }else{
        console.log('file created')
    }
})

/**Append file */
/**If file exists ,It adds new content directly and  does not delete the old one*/
fs.appendFile('deneme1.txt','Hellooooo1',function(error,data){
    if(error){
        console.log("error",error);
    }else{
        console.log("file append");
    }
})

/**Delete file */
fs.unlink('deneme.txt',function(error,data){
    if(error){
        console.log("error",error);
    }else{
        console.log("File deleted");
    }
})

/**Rename file */

fs.rename('deneme1.txt','example.txt',function(error,data){
    if(error){
        console.log("error",error);
    }
})