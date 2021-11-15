const http = require('http');
const fs = require('fs');

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

    if(req.url === '/customers'){
        res.setHeader('Content-Type','text/plain');
        res.statusCode = 200;
        res.statusMessage = 'Well done';
        res.write("Text reponse");
        res.end();
    }

    if(req.url === '/developers'){
        res.setHeader('Content-Type','Application/json');
        res.statusCode = 200;
        res.statusMessage = 'ok';
        res.write(JSON.stringify({id:3,name:'Mel'}));
        res.end();
    }

    if(req.url === '/managers'){
        res.setHeader('Content-Type','text/html');
        res.statusCode = 200;
        res.statusMessage = 'ok';
        res.write('<p style="background-color:red">hellooo html</p>');
        res.end();
    }

    if(req.url === '/students'){
        fs.readFile('indexx.html',function(error,file){
            if(error){
                res.setHeader('Content-Type','text/plain');
                res.statusCode = 404;
                res.statusMessage = 'Not found';
                res.end('Dosya bulunamadı.')
            }else{
                res.setHeader('Content-Type','text/html');
                res.statusCode = 200;
                res.statusMessage = 'Okey';          
                res.end(file);
            }
        })
    }
})


server.listen(3000);
console.log('Listening port on 3000..');