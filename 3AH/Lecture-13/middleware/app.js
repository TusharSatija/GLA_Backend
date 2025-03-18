let express=require('express');
let app=express();

// Middleware functions can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.

let Isvalid=(req,res,next)=>{
    let {password}=req.query;
    if(password=="")
    {
        res.send("password can't be empty");
    }
    else if(password!="tus1212")
    {
        res.send('this is a wrong password');
    }
    else{
        next();
    }
}

app.use((req,res,next)=>{
    console.log("this is a first middleware");
    next()
})

app.use((req,res,next)=>{
    console.log("this is  a second middleware");
    next();
})


app.get('/login',Isvalid,(req,res)=>{
    res.send('this is a login route')
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})

// http://localhost:3000/login?password=tus1212