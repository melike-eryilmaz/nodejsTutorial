const express = require('express');
const router = express.Router();
const path = require('path');

/*
router.get('/add-product',(req,res,next)=>{
    res.send(`
        <html>
            <head>
                <title>Add a new product</title>
            </head>
            <body>
                <form action="/admin/products" method="POST">
                    <input type="text" name="productName">
                    <input type="submit" value="save product">

                </form>
            </body>
        </html>
    
    `)
})
*/

router.get('/add-product',(req,res,next)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})


router.post('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


module.exports = router;