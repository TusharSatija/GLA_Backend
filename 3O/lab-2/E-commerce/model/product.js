const {  mongoose } = require("mongoose");
let product= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    img_url:{
        type:String ,
        required:true
    },
    price:{
        min:0,
        type:Number
    },
    desc:String
})
let Product=mongoose.model("Product",product);
module.exports=Product;