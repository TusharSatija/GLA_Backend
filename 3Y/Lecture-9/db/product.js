const {  mongoose, model } = require("mongoose");

let product= new mongoose.Schema({
    P_id:{
        type:Number,
        unique:true
    },
    product_name:{
       type:String
    },
    product_qty: {
        type: Number
    },
    product_desc:{
        type:String
    }
})
let Product=mongoose.model('Product',product);
module.exports=Product;