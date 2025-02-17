let express=require('express');
const {  mongoose } = require('mongoose');
let app=express();
let products=require('./seed');
let Product=require('./model/product');
app.set('view engine','ejs');
let path=require('path');
app.set(path.join(__dirname,'views'));
async function connect()
{
   await mongoose.connect('mongodb://127.0.0.1:27017/E-com-3T')
   console.log("connected to db");
}
connect();

app.get('/products',(req,res)=>{
   let product=Product.find({});
   console.log(product);
   res.render('index',{product});
})

app.post('/new',async (req,res)=>{
   let {title,desc,img_url,price}=req.body;
        await Product.create({title:title,
            desc:desc,
            price:price,
            img_url:img_url
         });
         res.redirect('/products');
})


app.get('/products/new',(req,res)=>{
   res.render('new');
})

async function insert()
{
   await Product.insertMany(products);
   console.log("inserted");
}
// insert();

app.listen(3000,()=>{
    console.log("app is running at port 3333");
})