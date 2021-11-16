const fs = require('fs');
const qs = require('querystring');

const routeHandler = (req,res)=>{
    const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write(`
             <html>
                <head>
                    <title></title>
                
                </head>
                <body>
                        <form method="POST" action="/log" >
                            <input type="text" name="message">
                            <button type="submit">Save</button>
                        </form>
                </body>

             
             </html>
        
        `)
    res.end()
  }

  if(url === '/log' && method === 'POST'){
    //body parsing 
    const body = [];
    req.on('data',(chunk)=>{
        body.push(chunk);
        console.log(chunk);//buffer
    });

    req.on('end',()=>{
        const bodyParsed = Buffer.concat(body).toString();
        console.log(bodyParsed);
        const message = bodyParsed.split('=')[1];
        console.log(message);
        console.log(qs.parse(bodyParsed));
        fs.appendFileSync('message.txt',message)
    })

    fs.writeFileSync('message.txt','/ndeneme');//`${}`
    res.statusCode = 302;
    res.setHeader('Location', '/');

    res.end();
    
  }
}

module.exports = routeHandler;