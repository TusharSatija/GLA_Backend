let express=require('express');
let app=express();
let mongoose=require('mongoose');


async function connect()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/3T');
    console.log("connected to db");
}
connect();

let student=new mongoose.Schema({
    name:String
})
let Student1= mongoose.model('Student1',student);

async function insert()
{
    let s1= new Student1({name:"raj"});
    await s1.save();
}
insert();


async function update()
{
    await Student1.findOneAndUpdate({name:"raj"},{subject:"full-stack"})
}
update()


app.listen(3000,()=>{
    console.log("app is running at port 3000");
})