const mongoose=require('mongoose')

const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    skill:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    }
})

const employees=mongoose.model('employees',employeeSchema)
module.exports=employees