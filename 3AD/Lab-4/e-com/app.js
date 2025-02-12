let express=require('express');
const {  mongoose } = require('mongoose');
let Product=require('./model/Product');
let products=require('./seed');
let app=express();
let method_override=require('method-override');
let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(method_override('_method'));
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

app.get('/product/new',(req,res)=>{
    res.render('new');
})

app.post('/new',async (req,res)=>{
    console.log(req.body);
    let {title,desc,price,img_url}=req.body;
    await Product.create({
        title:title,
        desc:desc,
        price:price,
        img_url:img_url
    });
    res.redirect('product')
})

app.get('/product/:id/edit',async (req,res)=>{
    let {_id}=req.params;
    let p1=await Product.find({_id:_id});
    console.log(p1);
    res.render('edit',{p1});
})

async function insert()
{
   await Product.insertMany(products);
   console.log("inserted..");
}
// insert();

app.listen(3000,()=>{
    console.log("app is running at port 3333");
})