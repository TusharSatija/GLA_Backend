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

let User=require('./model/user');
const { mongoose } = require('mongoose');


async function connectDB()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/3Y-auth");
    console.log("connected to db");
}
connectDB()

app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',async (req,res)=>{
    let {uname,email,password}=req.body;
    let u= new User({
        name:uname,
        email:email,
        password:password
    })
    await u.save();
     res.send("user registered successfully");
})

app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})