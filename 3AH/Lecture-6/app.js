let express=require('express');
let app=express();
let bodyparser=require('body-parser');
let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
app.use(bodyparser.urlencoded({extended:true}));

app.get('/login',(req,res)=>{
    res.render('index');
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send('data recieved  successfully..')
})

app.listen(3333,()=>{
    console.log('app is running at 3333');
})