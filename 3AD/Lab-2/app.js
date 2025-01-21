let express=require('express');
let app=express();
let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
let bodyParser=require('body-parser');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}))
app.get('/login',(req,res)=>{
    console.log(req.query);
    res.render('index1');
})


app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send('data recieved successfully ..')
})
app.listen(3333,()=>{
    console.log("app is running at port 3333");
})