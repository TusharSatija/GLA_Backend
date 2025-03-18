let express=require('express');
let app=express();
let passport=require('passport');
let path=require('path');
app.set('view engine','ejs');
app.use(path.join(__dirname,'views'));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

app.listen(3001,()=>{
    console.log("app is running at port 3000");
})