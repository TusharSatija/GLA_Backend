let express=require('express');
let app=express();
let cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/cart',(req,res)=>{
    req.cookie("name","tushar");
    req.cookie('mode',"dark");
    
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})