let express=require('express');
const {  mongoose } = require('mongoose');
const Product = require('./model/product');
const products = require('./seed');
let method_override=require('method-override');
app.use(method_override('_method'));
let app=express();
let path=require('path'); 
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));

async function connect()
{
   await mongoose.connect("mongodb://127.0.0.1:27017/E-com-3AH")
    console.log("connected to db");
}
connect();

app.get('/product',async (req,res)=>{
    let product=await Product.find({});
    // console.log(product);
    res.render('index',{product});
});

app.get('/product/new',(req,res)=>{
    res.render('new')
})

app.post('/new',async (req,res)=>{
    let {title,desc,img_url,price}=req.body;
    console.log(req.body);
    await Product.create({
        title:title,
        desc:desc,
        price:price,
        img_url:img_url
    });
    res.redirect('product');

})

app.get('/product/:id/edit',async (req,res)=>{
    let {id}=req.params;
    let p1=await Product.find({_id:id});
    console.log(p1);
    res.render('edit',{p1});
})


app.patch('/product/edit/:id',async (req,res)=>{
    let id=req.params;
    let {title,desc,img_url,price}=req.body;
    await products.findOneAndUpdate({_id,id},{
        title:title,
        desc:desc,
        price:price,
        img_url:img_url
    })
    res.redirect('product');
})

async function insert()
{
    await Product.insertMany(products);
    console.log("inserted.");
}
// insert();

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})