let express=require('express');
const { mongoose } = require('mongoose');
const pro= require('./seed');
let app=express();
let Product=require('./model/product');
let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

async function connect()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-com-3Y');
    console.log("connect to db");
}
connect();


app.get('/product',async (req,res)=>{
    let product1= await  Product.find({});
    res.render('index',{product1});
})

async function insert()
{
    await Product.insertMany(pro);
    console.log("inserted successfully ...");
}
// insert();

app.get('/product',(req,res)=>{
    res.render('index',{pro});
})






app.listen(3333,()=>{
    console.log("app is running at port 3333");
})