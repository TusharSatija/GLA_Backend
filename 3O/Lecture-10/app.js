let express=require('express');
let app=express();
let path=require('path');
let User=require('./model/user');
let passport=require('passport');
let bcrypt=require('bcrypt');
app.use(express.urlencoded({extended:true}));
const { default: mongoose } = require('mongoose');
// app.use(passport.initialize());
// app.use(passport.session());
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

async function connectdb()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/3O-auth")
    console.log("connected db");
}
connectdb();

app.get('/login',(req,res)=>{
    res.render('login');
})


app.get('/register',(req,res)=>{
  res.render('register');
})

app.post('/register',async(req,res)=>{
  console.log(req.body);
  let {Uname,email,password}=req.body;
  let hashpassword=await bcrypt.hash(password,10);
  console.log(hashpassword);
  let user1= new User({
    name:Uname,
    email:email,
    password:hashpassword
  })
  await user1.save();
  res.send("user registered Successfully ...");

})

app.post('/login',async (req,res)=>{
    let { nameLogin,passLogin }=req.body;
    let user=await User.find({name:nameLogin});
    if(user.name==nameLogin)
    {
     let r=bcrypt.compare(passLogin,user.password);
      console.log(r);
      res.send("Welocome ",user.name);
    }
    else{
      res.redirect('/login');
    }

})






app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
});


passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})