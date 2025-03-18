let express=require('express');
let app=express();

let Isvalid=(req,res,next)=>{
    let {password}=req.query;
    if(password=='')
    {
        res.send("password can't be empty");
    }
    else if(password!='1234'){
        res.send("this is a wrong password Invalid USer!!")
    }
    else{
        // next();
    }
}
app.use((req,res,next)=>{
    console.log("this is  first middleware");
    next();
})

app.use((req,res,next)=>{
    console.log("this is  second middleware");
    next();
});
app.use((req,res,next)=>{
    console.log("this is  third middleware");
    next();
})

app.get('/login',Isvalid,(req,res)=>{
    res.send('this is a login route');
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})