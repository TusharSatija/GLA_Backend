let express=require('express');
let app=express();
let methodoverride=require('method-override');
let path= require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
app.use(methodoverride('_method'));

let blogs=[
    {
        id:1,
        title:"first blog",
        imgUrl:"https://images.unsplash.com/photo-1734784547207-7ad9f04c1f0a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"art graphics paper confetti"
    },
    {
        id:2,
        title:"second blog",
        imgUrl:"https://images.unsplash.com/photo-1667270532914-788966ce19c3?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

// Show a single blog
app.get('/blogs/:blogId', (req, res) => {
    const { blogId } = req.params; 
    const blog = blogs.find((blog) => blog.id === blogId);
    if (!blog) {
        throw new Error('Blog with this id is not present');
    }
    res.render('show', { blog });
});

// Show edit form
app.get('/blogs/:blogId/edit', (req, res) => {
    const { blogId } = req.params; 
    const blog = blogs.find((blog) => blog.id === blogId);
    if (!blog) {
        throw new Error('Blog with this id is not present');
    }
    res.render('edit', { blog });
});

// Apply partial modification
app.patch('/blogs/:blogId', (req, res) => {
    const { blogId } = req.params;
    const { title, desc, imgUrl } = req.body;
    const newBlogs = blogs.map((blog) => blog.id === blogId ? { ...blog, title: title, desc: desc, imgUrl: imgUrl } : blog);
    blogs = newBlogs;
    res.redirect(`/blogs/${blogId}`);
});

// Delete blog
app.delete('/blogs/:blogId', (req, res) => {
    const { blogId } = req.params;
    const newBlogs = blogs.filter((blog) => blog.id !== blogId);
    blogs = newBlogs;
    res.redirect('/blogs');
})

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})