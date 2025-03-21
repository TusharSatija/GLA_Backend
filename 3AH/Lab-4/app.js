let express=require('express');
let app=express();
let path=require('path');
let User=require('./model/user');
let bcrypt=require('bcrypt');
const {  mongoose } = require('mongoose');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));

async function connectdb()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/3AH-auth');
    console.log("connected to db");
}
connectdb();


app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',async (req,res)=>{
    let {Uname,password,mail}=req.body;
    let hashpasword=await bcrypt.hash(password,8);

    let u1=new  User({
        name:Uname,
        password:hashpasword,
        email:mail
    });
    await u1.save();
    res.send('user Registered Successfully !!');
});

app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login', async (req, res) => {
    let { name_log, pass_log } = req.body;
    let user1 = await User.findOne({ name: name_log });

    console.log(user1);

    if (!user1) {
        return res.send("Invalid User");  
    }

    if (await bcrypt.compare(pass_log, user1.password)) {
        res.send(`Welcome ${user1.name}`);
    } else {
        res.send("Invalid User");
    }
});


app.listen(3000,()=>{
    console.log("app is running at port 3000");
})