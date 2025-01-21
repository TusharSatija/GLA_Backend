let express=require('express');
let app=express();
let path=require('path');

app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

app.get('/home',(req,res)=>{
    res.render('index');
})

// app.get('/login',(req,res)=>{
//     // console.log(req.query);
//     res.render('index');
// })

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send("this is a login route using post method")
})


app.listen(3000,()=>{
    console.log("app is running at port 3000");
})