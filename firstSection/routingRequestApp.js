const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
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
    fs.writeFileSync('message.txt','/ndeneme');//`${}`
    res.statusCode = 302;
    res.setHeader('Location', '/');

    res.end();
    
  }
})


server.listen(3000);