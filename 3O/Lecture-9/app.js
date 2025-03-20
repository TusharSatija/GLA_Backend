let express=require('express');
let app=express();
let path=require('path');
let passport=require('passport');
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

app.get('/login',(req,res)=>{
    res.render('login');
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