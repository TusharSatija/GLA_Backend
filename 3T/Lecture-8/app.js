let express=require('express');
let app=express();
let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

let blogs=[
    {
        id:1,
        title:"first blog",
        url:"https://images.unsplash.com/photo-1737142928492-13e7b0efe912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
        desc:"nature krynica morska poland"
    }
    ,{
        id:2,
        title:"second blog",
        url:"https://images.unsplash.com/photo-1737490299002-454d5ee26756?q=80&w=1877&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"krynica morska poland nature"
    }
]

app.get('/blogs',(req,res)=>{
    res.render('index',{blogs});
})

app.get('/blog/new',(req,res)=>{
    res.render('new');
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})