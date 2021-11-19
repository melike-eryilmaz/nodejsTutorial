const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname,'public')))

//npm install pug
//Uygulamaya hangi template engine kullanacağımızı söylüyoruz.
app.set('view engine','pug');
//Ve template engine dosyaları hangi klasör altında olacak belirtiyoruz.Defaultu './views' altındadır.
app.set('views','./views');

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/add-product',(req,res)=>{
    res.render('add-product');
})

app.use((req,res)=>{
    res.render('404');
})

app.listen(3000,()=>{
    console.log('Listening port 3000');
})