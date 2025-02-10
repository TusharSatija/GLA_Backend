let express=require('express');
const {  mongoose } = require('mongoose');
let Product=require('./model/Product');
let products=require('./seed');
let app=express();
let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));


async function connect()
{
   await mongoose.connect('mongodb://127.0.0.1:27017/E-com-3AD');
   console.log("connect to db");
}
connect();


app.get('/product',async (req,res)=>{
    let product1= await Product.find({});
    res.render('index',{product1});
})

async function insert()
{
   await Product.insertMany(products);
   console.log("inserted..");
}
// insert();

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})