let express=require('express');
let app=express();
let path=require('path');
let passport=require('passport');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
app.use(passport.initialize());
// app.use(passport.session());
app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})