let express=require('express');
let app=express();
let path=require('path');
let User=require('./model/user');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const { mongoose } = require('mongoose');
app.set('view engine','ejs');

let session=require('express-session');
app.use(session({
  secret: 'This is a secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
  maxAge:5*24*60*60*1000
}))
app.set(path.join(__dirname,'views'));
let LocalStrategy=require('passport-local').Strategy;
let passport=require('passport');

app.use(passport.initialize());
app.use(passport.session());

async function connect()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/auth');
    console.log("connected to db");
}
connect();

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) 
        { return done(err); }
      if (!user)
        { return done(null, false); }
      if (!user.verifyPassword(password))
        { return done(null, false); 
        }
        return done(null, user);
      });
    }
  ));
  
app.get('/login',(req,res)=>{
      res.render('login');
})
app.post('/login',async (req,res)=>{
   let {username,password}=req.body;
    let user1= await User.findOne({username});
    if(user1)
    {
      res.status(200).json({
        message:"user already exist"
      })
    }
    let u1= new user1({username:username,password:password})
    u1.save();
    if(err)
    {
      res.status(501).json({
        message:"server error!!"
      })
    }

  })



app.get('/register',(req,res)=>{
    res.render('register');
})



app.post('/register',async (req,res)=>{
  let {Uname,password,mail}=req.body;
  console.log(req.body);
  let u1= new User({
    username:Uname,
    password:password,
    email:mail
  });
  await u1.save();
  res.send("registered Successfully!!");
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


app.listen(3001,()=>{
    console.log("app is running at port 3001");
})