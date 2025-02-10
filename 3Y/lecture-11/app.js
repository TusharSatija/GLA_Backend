let express=require('express');
let app=express();
let mongoose=require('mongoose');
let data=require('./seed')
let Product=require('./db/product');
console.log(data);
mongoose.connect("mongodb://127.0.0.1:27017/3y")
.then(()=>{
    console.log("connected to db.");
})
.catch((err)=>{
    console.log(err);
})


let stu=new mongoose.Schema({
    name:String
})

let Stu= mongoose.model('Stu',stu);

async function insert()
{
    // let s=new Stu({name :"abc"});
    // await s.save();

    // await Stu.create({name:"tushar"});
    await insertMany(data);
}
insert();

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})