let  express=require('express');
let app=express();

let path=require('path')
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

// http://localhost:3000/test
app.get('/test',(req,res)=>{
    res.send('this is a test route');
})




app.listen(3000,()=>{
    console.log("app is runnig at port 3000");
})