let express=require('express');
let app=express();
let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,"views"));

let blogs=[
    {
        id:1,
        title:'first blog',
        url:"https://images.unsplash.com/photo-1736880705369-e345ec5fa278?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D",
        desc:"animal,wildlife,horse"
    },
    {
        id:2,
        title:'second blog',
        url:"https://images.unsplash.com/photo-1736297150541-89378f055b96?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"jakarta,indonesia,experimental,cityscape"
    }
]
app.get('/blogs',(req,res)=>{
    res.render('index',{blogs});
})

app.get('/blog/new',(req,res)=>{
    res.render('new');
})

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})