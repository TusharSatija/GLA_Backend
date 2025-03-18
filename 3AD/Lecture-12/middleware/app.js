let express=require('express');
let app=express();



// Middleware functions can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.
let isvalid=(req,res,next)=>{
    let {name}=req.query;
    if(name=="")
    {
        return res.send("name can't be empty");
    }
    else if(name!="tushar")
    {
        return res.send('wrong user');
    }
    else{
        next();
    }
}

app.use((req,res,next)=>{
    console.log("this is a first middleware");
    next();
})

app.use((req,res,next)=>{
    console.log("this is a second middleware");
    next();
})
app.get('/login',isvalid,(req,res)=>{
    res.send("this is login route ");
})


app.listen(3333,()=>{
    console.log("app is running at port 3333");
})