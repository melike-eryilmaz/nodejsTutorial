const express = require('express');
const app = express();

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

//Örneğin her ana dizine gelindiğinde loglama yapmak istiyoruz.Aşağıdaki gibi yaparız.
app.use('/',(req,res,next)=>{
    console.log("Loglama yapılıyor..");
    next();
})

app.use('/app-product-delete',(req,res,next)=>{
    res.send('product delete')
})






app.get('/',(req,res)=>{
    res.send('Welcome home page')//default text/html gönderir.

});

app.get('/api/products',(req,res)=>{
    res.send('Product list')
});

app.listen(3000,()=>{
    console.log('Listening port 3000');
})