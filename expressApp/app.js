const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('Welcome home page')//default text/html gönderir.

});

app.get('/api/products',(req,res)=>{
    res.send('Product list')
});

app.listen(3000,()=>{
    console.log('Listening port 3000');
})