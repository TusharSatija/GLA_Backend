const { mongoose } = require("mongoose");

let test=new mongoose.schema({
    name:{
        type:String
    },
    id:{
        type:Number
    },
    contact_number:{
        type:Number
    }
})


let test1=mongoose.model("test1",test);

module.exports=test1;