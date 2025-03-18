let express=require('express');
let app=express();

//middleware can change req-res object
// middleware can stop req-res cycle
let Isvalid=(req,res,next)=>{
    let {password}=req.query;
    if(password=='')
    {
        res.send('password can"t be empty');
    }
    else if(password!="1234")
    {   
        res.send("this is a wrong password");
    }
    else
     next();
}

app.get('/login',Isvalid,(req,res)=>{
    res.send('This is a login route');
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})