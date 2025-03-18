let express=require('express');
let app=express();

let cookieParser = require('cookie-parser');
app.use(cookieParser())

app.get('/cart',(req,res)=>{
    req.cookie('name',"tushar");
    req.cookie('mode','dark');
    req.cookie('favfruit',"mango",{
        signed:true,
        httpOnly:true,
        maxAge:7*24*60*60*1000
    })
    res.send('this is a cart cookie');
})

app.get('/product',(req,res)=>{
    console.log(req.cookies);
    res.send('Signed Cookies: ', req.signedCookies)
})

app.listen(3333,()=>{
    console.log("app is running at port 3333");
});