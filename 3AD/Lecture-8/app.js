let express=require('express');
let app=express();
let path= require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

let blogs=[
    {
        id:1,
        tittle:"first blog",
        url:"",
        desc:""
    },
    {
        id:2,
        tittle:"second blog",
        url:"",
        desc:""
    }
]

//to display all blogs
app.get('/blogs',(req,res)=>{
    res.render('index',{blogs});
})



// to create a new blog
app.get('/blog/new',(req,res)=>{
    res.render('new');
})

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})