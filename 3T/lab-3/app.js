let express=require('express');
let {mongoose}=require('mongoose');
let app=express();

async function connect()
{
   await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("connect to db");
}
connect();

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})