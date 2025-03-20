const { mongoose } = require("mongoose");
let user=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:String
});

let User=mongoose.model('User',user);
module.exports=User;

