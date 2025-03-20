let express=require('express');
let app=express();
let path=require('path');
let passport=require('passport');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
let user=require('./model/user');
app.use(express.json());
app.use(passport.initialize());
// app.use(passport.session());

app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',async (req,res)=>{
    let {uname,email,password}=req.body;
    let user1=user.findOne({uname});
    if(user1)
    {
        res.status(201).json({
            message: "user already exits"
        })
    }
    let u1=new user.create(
        {
            name:uname,
            email:email,
            password:password
        });
        await u1.save();
    if(err)
    {
        res.status(400).json({
            "message":"something wwent wrong!!!"
        })
    }



})

app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})