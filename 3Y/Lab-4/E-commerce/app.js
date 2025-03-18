let express=require('express');
const { mongoose } = require('mongoose');
const pro= require('./seed');
let app=express();
let Product=require('./model/product');
let methodOverride=require('method-override');
let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
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

app.get('/product/new',(req,res)=>{
    res.render('new'); 
})

app.post('/new',async(req,res)=>{
    let {title,desc,img_url,price}=req.body;
    console.log(req.body);
    await Product.create({title:title,
        desc:desc,
        img_url:img_url,
        price:price
    })
    res.redirect('product')
    
})


app.get('/product/:id/edit',async (req,res)=>{
    let {id}=req.params;
    let p1=await Product.find({_id:id});
    console.log(p1);
    res.render('edit',{p1});
})


app.patch('/product/:id/',async (req,res)=>{
    let {title,desc,img_url,price}=req.body;
    let {id}=req.params;
    await Product.updateOne({_id:id},{title:title,
        price:price,
        desc:desc,
        img_url:img_url
    })
    res.redirect('product');
});


app.delete('/product/delete/:id',async (req,res)=>{
    let {id}=req.params;
       await Product.findbyIdAndDelete({_id:id});
})


async function insert()
{
    await Product.insertMany(pro);
    console.log("inserted successfully ...");
}
// insert();

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})