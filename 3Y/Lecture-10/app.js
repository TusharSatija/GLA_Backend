let express=require('express');
let app=express();
let mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/test")
.then(()=>{
    console.log("connected to db.");
})
.catch((err)=>{
    console.log(err);
})


app.listen(3333,()=>{
    console.log("app is running at port 3333");
})