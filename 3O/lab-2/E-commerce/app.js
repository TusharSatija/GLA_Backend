let express=require('express');
const { mongoose } = require('mongoose');
let app=express();
let Product=require('./model/product');
let products=require('./seed');
console.log(products); 
let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,"views"));

async function connect()
{
   await mongoose.connect("mongodb://127.0.0.1:27017/E-com-3O")
    console.log("connected to db");
}
connect();

app.get('/product',async (req,res)=>{
    let product=await Product.find({});
    res.render('index',{product});
})


app.get('/product/new',(req,res)=>{
    res.render('new');
})

async function insert()
{
    await Product.insertMany(products);
   console.log("inserted");
}
// insert();

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})