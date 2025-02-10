let express=require('express');
const { default: mongoose } = require('mongoose');
let app=express();

async function connect()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-com-3Y');
    console.log("connect to db");
}
connect();




app.listen(3333,()=>{
    console.log("app is running at port 3333");
})