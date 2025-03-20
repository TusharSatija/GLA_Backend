let express=require('express');
let app=express();
let path=require('path');
let user=require('./model/user');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));


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

app.post('/login',(req,res)=>{

})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})