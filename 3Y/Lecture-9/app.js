let express=require('express');
const { default: mongoose } = require('mongoose');
let app=express();

async function connectdb()
{   
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
    console.log("connected to db");
}
connectdb();

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})