const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const path = require('path');


//app.use(bodyParser.urlencoded({extended:false}))  //now deprecated use express.urlencoded
//use as a middleware
app.use(express.urlencoded({extended:false}))

/**Proje içerisindeki css ve img dosyalarına(harici kaynaklara) erişebilmek için /404 vermemesi için bu dosyaları proje içerisinde tüm dosyalara açmak gerekir
 * Bu şekilde yapıldığında başında public route gerek kalmadan css/syle.css şeklinde çağırabiliriz.
 * 
 */
app.use(express.static(path.join(__dirname,'public')))


//use routes as a middleware
app.use('/admin',adminRoutes);
app.use('/user',userRoutes);

/*
//Herhangi bir url belirtmedik .Tüm url lerde çalışır.
app.use((req,res,next)=>{
    console.log("middleware 1 çalıştırıldı.");
    next();

})

app.use((req,res,next)=>{
    console.log("middleware 2 çalıştırıldı.");
    res.send('<h1>helloo from middleware</h1>')
})
*/

/*
//Aşağıdaki gibi / ile başlayan route 'u en başa koyarsak hepsi / ile başladığı için hep aynı response döner.
// '/' karşılık gelen response döner.
app.use('/',(req,res,next)=>{
    res.send('ana route')
})

app.use('/app-product-delete',(req,res,next)=>{
    res.send('product delete')
})

*/
/* moved user.js
//Örneğin her ana dizine gelindiğinde loglama yapmak istiyoruz.Aşağıdaki gibi yaparız.
app.use('/',(req,res,next)=>{
    console.log("Loglama yapılıyor..");
    next();
})
*/
app.use('/app-product-delete',(req,res,next)=>{
    res.send('product delete')
})

/* moved admin.js
app.use('/add-product',(req,res,next)=>{
    res.send(`
        <html>
            <head>
                <title>Add a new product</title>
            </head>
            <body>
                <form action="/products" method="POST">
                    <input type="text" name="productName">
                    <input type="submit" value="save product">

                </form>
            </body>
        </html>
    
    `)
})
*/
/*
//use yerine get veya post gibi method filtrelemesi yapabiliriz.
//use ile tüm methodlarda çalışır.
app.use('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
*/
//only post methods..
//if(url.method==='POST') gibi..
/* moved admin.js
app.post('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
*/
app.get('/',(req,res)=>{
  //  res.send('Welcome home page')//default text/html gönderir.
  res.sendFile(path.join(__dirname,'./','views','index.html'))

});

app.get('/api/products',(req,res)=>{
    res.send('Product list')
});

app.use((req,res)=>{
   // res.status(404).send('<h1>Page not found</h1>')
   res.status(404).sendFile(path.join(__dirname,'./','views','404.html'))
})

app.listen(3000,()=>{
    console.log('Listening port 3000');
})