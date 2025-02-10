let { mongoose } = require("mongoose");

let product= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    img_url:{
        type:String,
        required:true
    },
    desc:String,
    price:{
        type:Number,
        min:0,
        required:true
    }
})

let Product= mongoose.model("Product",product);
module.exports=Product;