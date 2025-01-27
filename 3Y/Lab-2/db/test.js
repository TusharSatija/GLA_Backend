const { mongoose } = require("mongoose");

let test=new mongoose.schema({
    name:String,
    id:Number,
    contact_number:Number
})


let test1=mongoose.model("test1",test);

module.exports=test1;