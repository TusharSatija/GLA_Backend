let express=require('express');
let app=express();
let path=require('path');
let passport=require('passport');
let LocalStrategy= require('passport-local').Strategy;
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
 
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
});


passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

app.post('/register',async (req,res)=>{
    let {uname,email,password}=req.body;
    console.log(req.body);
    let u= new User({
        name:uname,
        email:email,
        password:password
    })
    await u.save();
     res.send("user registered successfully");
});


passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
});

app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})