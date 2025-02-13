let express=require('express');
const {  mongoose } = require('mongoose');
let app=express();
let products=require('./seed');
let Product=require('./model/product')
async function connect()
{
   await mongoose.connect('mongodb://127.0.0.1:27017/E-com-3T')
   console.log("connected to db");
}
connect();


async function insert()
{
   await Product.insertMany(products);
   console.log("inserted");
}
// insert();

app.listen(3000,()=>{
    console.log("app is running at port 3333");
})