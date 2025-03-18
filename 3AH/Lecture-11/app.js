let express=require('express');
const { default: mongoose } = require('mongoose');
let app=express();

async function connect()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/3AH")
    console.log("connected to db");
}
connect();

const kittySchema = new mongoose.Schema({
    name: String
  });
  const Kitten = mongoose.model('Kitten', kittySchema);


async function insert()
{
    // let k1= new Kitten({name:'k12'});
    // await k1.save();

    // await Kitten.create({ name:"k23"});

    await Kitten.insertMany([{name:"k22"},{name:"k33"}])
    console.log("inserted") 
}
insert();


app.listen(3333,()=>{
    console.log("app is running at port 3333");
})