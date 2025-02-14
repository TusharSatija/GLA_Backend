const {  mongoose } = require("mongoose");

let product= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    img_url:String,
    desc:String,
    price:{
        type:Number,
        min:0
    }
});

let Product=mongoose.model('Product',product);
module.exports=Product;