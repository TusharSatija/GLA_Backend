const {mongoose } = require("mongoose");
let  product= new mongoose.Schema({
    P_name:{
        type:String,
        required:true
    },
    P_price:{
        type:Number,
        required:true,
        unique:true
    },
    P_desc:{
        type:String,
        require:true
    }
})
let Product=mongoose.model('Product',product);
module.exports=Product;