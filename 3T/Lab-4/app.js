let express=require('express');
let app=express();
let path=require('path');
let User=require('./model/user');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
let mongoose=require('mongoose');
const user = require('./model/user');

app.use(express.urlencoded({extended:true}));

async function connectdb()
{
  await mongoose.connect("mongodb://127.0.0.1:27017/3T-auth");
  console.log("connected to db");
}
connectdb();


// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, 
//         function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));
app.get('/login',(req,res)=>{
    res,render('login');
})

app.get('/register',(req,res)=>{
  res.render('register');
})

app.post('/register',async (req,res)=>{
  let {uname,mail,password}=req.body;
  console.log(req.body);
  let u1= new User({
    name:uname,
    mail:mail,
    password:password
  })
  await u1.save();
  res.send('user registered Successfully!!');
})

app.get('/login',(req,res)=>{
  res.render('login');
})

app.post('/login',async (req,res)=>{
  let {uname, password}=req.body;
  let u1=await User.findOne({name:uname});
  if(!u1)
  {
    res.send("Invalid USer");
  }
  if(password==u1.password)
  {
    res.send(`welcome ${uname}`);
  }
  else{
    res.send('user not found');
  }
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})