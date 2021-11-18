const express = require('express');
const app = express();


//Herhangi bir url belirtmedik .Tüm url lerde çalışır.
app.use((req,res,next)=>{
    console.log("middleware 1 çalıştırıldı.");
    next();

})

app.use((req,res,next)=>{
    console.log("middleware 2 çalıştırıldı.");
    res.send('<h1>helloo from middleware</h1>')
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