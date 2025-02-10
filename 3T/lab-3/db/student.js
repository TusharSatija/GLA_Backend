let {schema, default: mongoose}=require('mongoose');

let student=new schema({
    name:{
        type:String,
        min:3,
        require:true
    },
    id:{
        type:Number,
        unique:true,
        require:true
    },
    age:{
        type: Number,
        min:18,
        require:true
    }
})

let Student=mongoose.model('Student',student);

module.exports=Student;


// product title
// product_id
// product desc
// product_qty
// product_price
