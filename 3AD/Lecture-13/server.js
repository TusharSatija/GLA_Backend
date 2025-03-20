let express=require('express');
let app=express();
let passport=require('passport');
let path=require('path');
let User=require('/model/user');
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