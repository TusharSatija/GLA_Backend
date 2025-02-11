let express=require('express');
let {mongoose}=require('mongoose');
let app=express();
let Product=require('./model/product');
async function connect()
{
   await mongoose.connect("mongodb://127.0.0.1:27017/3O");
   console.log("connected to db");

}
connect();

async function insert()
{
    // let p1= new Product({
    //     title:"laptop",
    //     desc:"This is a laptop",
    //     price:120000
    // })   
    // await p1.save();

    // await Product.create({
    //     title:"phone",
    //     desc:"this is a phone",
    //     price:14000
    // })

    await Product.insertMany([{}]);
}
insert();





app.listen(3333,()=>{
    console.log("app is running at port 3333");
})