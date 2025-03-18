let express=require('express');
let app=express();
app.set('view engine','ejs');
let path=require('path');
let method_override=require('method-override');
app.use(method_override('_method'));
app.set(path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
let product=[
    {
        id:1,
        name:"Glass",
        price:1212
    },
    {
        id:2,
        name:"bottle",
        price:2300
    }
];

//to display all product
app.get('/product',(req,res)=>{
    res.render('index',{product});
})

//to add new Product
app.get('/product/new',(req,res)=>{
    res.render('new');
})

app.post('/new',(req,res)=>{
    let {name,price}=req.body;
    product.push({
        name:name,
        price:price,
        id:Math.random()*1000
    })
    res.redirect('product');
});

app.get('/product/:id/edit',(req,res)=>{
    let {id}=req.params;
    let p=product.find((p1)=>p1.id==id);
    console.log(p);
    res.render('edit',{p});
});

app.patch('/product/:id/edit',(req,res)=>{
    let {id}=req.params;
    let {name,price}=req.body;
    let new_product=product.map((p)=>p.id==id?{
        name:name,
        price:price
    }:p);
    product=new_product;
    res.redirect('product');
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})