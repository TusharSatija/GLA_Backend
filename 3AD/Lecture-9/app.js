let express=require('express');
let app=express();
let path= require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

let blogs=[
    {
        id:1,
        tittle:"first blog",
        url:"https://images.unsplash.com/photo-1734784547207-7ad9f04c1f0a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"art graphics paper confetti"
    },
    {
        id:2,
        tittle:"second blog",
        url:"https://images.unsplash.com/photo-1667270532914-788966ce19c3?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"art modern art paper confettigraphics babypersonHDWallpapers"
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