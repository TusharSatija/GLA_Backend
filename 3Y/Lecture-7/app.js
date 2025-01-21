let express=require('express');
let app=express();

let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('index')
})



app.listen(3333,()=>{
    console.log("app is runnning at port 3333");
})