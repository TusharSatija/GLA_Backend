let express=require('express');
let app=express();
let mongoose=require('mongoose');

async function connect()
{
   await mongoose.connect('mongodb://127.0.0.1:27017/3AD');
   console.log("connected to db");
}
connect();

let kittySchema = new mongoose.Schema({
    name: String
  });
let Kitten = mongoose.model('Kitten', kittySchema);


 async function insert()
{
    // let k1=new Kitten({ name:"kitty"});
    // await k1.save();
    // await Kitten.create({name:"kitten1"})
    await Kitten.insertMany([ {name: "k2"} ,{name:"k3"}]);
}
insert();


app.listen(3333,()=>{
    console.log("app is runnig at port 3333");
})