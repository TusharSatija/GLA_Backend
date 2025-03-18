let express=require('express');
let app=express();
let cookieParser=require('cookie-parser');
app.use(cookieParser())

app.get('/setcookie',(req,res)=>{
    res.cookie("username","tushar");
    res.send('set cookie successfullly ... ')
});

app.listen(3333,()=>{
     console.log("app is running at port 3333");  
})