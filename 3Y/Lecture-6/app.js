let express=require('express');
let app=express();
let bodyparser=require('body-parser');

let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

app.use(bodyparser.urlencoded({extends:true}))
app.get('/home',(req,res)=>{
    console.log(req.query);
    res.render('index');
})
app.get('/login',(req,res)=>{
    res.render('index1')
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send('data recieved successfully ...');
})
app.listen(3000,()=>{
    console.log("app is running at port 3000");
})