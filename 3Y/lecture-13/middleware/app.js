let express=require('express');
let app=express();

// Middleware functions can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.


app.use((req,res,next)=>{
    console.log("this is a first middleware");
    next();
})

app.use((req,res,next)=>{
    console.log("this is a second middleware");
    next();
})
let isloggin=(req,res,next)=>{
    let {fav}=req.query;
    if(fav=="")    
       return res.send("password can't be empty");
    else if(fav!='mango')
    {
        return res.send('this is a wrong password');
    } 
    else{
        next();
    }
    // console.log("this is a login middleware");
}
app.get('/login',isloggin,(req,res)=>{
    res.send('this is a login route');
});

app.listen(3333,()=>{
    console.log("app  is running at port 3333");
})