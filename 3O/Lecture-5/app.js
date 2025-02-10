let express=require('express');
let app= express();
let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
let blogs=[
    {
        id:1,
        title:'first blog',
        url:"https://plus.unsplash.com/premium_photo-1737836420070-e3ee9611d50c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"forest night stars nature"
    },
    {
        id:2,
        title:"second blog",
        url:"https://plus.unsplash.com/premium_photo-1736099749729-6f0161f9bee3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"starry sky Creative Commons images"
    }
]

app.get('/blogs',(req,res)=>{
    res.render('index',{blogs});
})

app.get('/blog/new',(req,res)=>{
    res.render('new');
})

app.post('/show',(req,res)=>{
    console.log(req.body);
    let {title,url,desc}=req.body;
    blogs.push({title:title,
        url:url,
        desc:desc
    })
    res.send("data recieved successfully ..");
})


app.post('/blog',(req,res)=>{
    console.log(req.body); 
    let {title,desc,url}=req.body;
    blogs.push({
        title:title,
        desc:desc,
        url:url
    })
    res.redirect('/blogs');   
})

app.get('/blog/:id/edit',(req,res)=>{
    console.log(req.params);
    let edit_blog=blogs.find((blog)=>blog.id==req.params.id);
    res.render('edit',{edit_blog});
})

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})