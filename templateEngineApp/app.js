const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.locals.basedir = path.join(__dirname, 'views');

const products = [
    {name:'İphone 11',price:'100$',description:'Good phone',image:'1.jpg'},
    {name:'İphone 12',price:'500$',description:'Good phone',image:'2.jpg'},
    {name:'İphone 13',price:'700$',description:'Good phone',image:'3.jpg'},
    {name:'İphone 14',price:'400$',description:'Good phone',image:'4.jpg'}

];

//npm install pug
//Uygulamaya hangi template engine kullanacağımızı söylüyoruz.
app.set('view engine','pug');
//Ve template engine dosyaları hangi klasör altında olacak belirtiyoruz.Defaultu './views' altındadır.
app.set('views','./views');

app.get('/',(req,res)=>{

    res.render('index',{title:'Products',products:products});
})

app.get('/add-product',(req,res)=>{
    res.render('add-product',{title:'Add a new product'});
})

app.post('/add-product',(req,res)=>{
  //  console.log(req.body);
    products.push({name:req.body.name,price:req.body.price,description:req.body.description,image:req.body.image});
    res.redirect('/');
})

app.use((req,res)=>{
    res.render('404',{title:'404'});
})

app.listen(3000,()=>{
    console.log('Listening port 3000');
})