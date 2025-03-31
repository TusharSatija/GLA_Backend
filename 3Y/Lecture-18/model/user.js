const { mongoose } = require("mongoose");

let User=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:String,
    email:String
});

let user= mongoose.model('user',User);
module.exports=user;