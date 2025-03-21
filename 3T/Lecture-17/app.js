let express=require('express');
let app=express();
let path=require('path');
let User=require('./model/user');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
let mongoose=require('mongoose');

async function connectdb()
{
  await mongoose.connect("mongodb://127.0.0.1:27017/3T-auth");
  console.log("connected to db");
}
connectdb();


passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, 
        function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));
app.get('/login',(req,res)=>{
    res,render('login');
})

app.post('/register',async(req,res)=>{
  let {uname,mail,password}=req.body;
  let u1= new user({
    name:uname,
    mail:mail,
    password:password
  })
  await u1.save();
  res.send('user registered Successfully!!');
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})