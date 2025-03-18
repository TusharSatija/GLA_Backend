let express=require('express');
let app=express();

// Middleware functions can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.
let islogin=(req,res,next)=>{
    let {favfruit}=req.query;
    console.log(req.query);
    if(favfruit==""){
        return res.send("password can't be empty")
    }
    else if(favfruit!='orange')
    {
        return res.send("wrong password");
    }
    else
    next();
}
app.use((req,res,next)=>{
    console.log("this is a first middlware");
    next();
})
app.use((req,res,next)=>{
    console.log("this is a second middlware");
    next();
})




app.get('/login',islogin,(req,res)=>{
    res.send('this is a login page');
})

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})