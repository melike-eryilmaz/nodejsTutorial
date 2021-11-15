const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("request",req);
    if(req.url === '/'){
        res.write('Helllooo html module')
        res.end();
    }
    if(req.url === '/api/products'){
        res.write('Product list');
        res.end();
    }
})


server.listen(3000);
console.log('Listening port on 3000..');