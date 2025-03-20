let express=require('express');
let app=express();
let passport=require('passport');
let path=require('path');
let User=require('/model/user');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const { default: mongoose } = require('mongoose');
app.set('view engine','ejs');

app.use(path.join(__dirname,'views'));
app.use(passport.initialize());
app.use(passport.session());

async function connect()
{
    await mongoose.connect(' mongodb://127.0.0.1:27017/auth');
    console.log("connected to db");
}
connect();

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



app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

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

app.listen(3001,()=>{
    console.log("app is running at port 3000");
})