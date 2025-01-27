let express=require('express');
let app=express();
let mongoose=require('mongoose');


async function connectdb()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/learn-mongo")
    console.log("connect to db...");
}
connectdb();

app.listen(3333,()=>{
    console.log("app is running at Port 3333");
})