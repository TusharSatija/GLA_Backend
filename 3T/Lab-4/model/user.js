const { mongoose } = require("mongoose")
let user= new mongoose.Schema({
    name: String,
    password:String,
    mail:String
})

let User=mongoose.model('User',user);
module.exports=User;