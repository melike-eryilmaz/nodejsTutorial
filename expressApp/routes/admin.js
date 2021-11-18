const express = require('express');
const router = express.Router();

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

router.post('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


module.exports = router;