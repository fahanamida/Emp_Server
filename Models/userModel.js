const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String
    },
    bio:{
        type:String,
        default:"I'm a BookStore User"
    },
    profile:{
        type:String,
        default:""
    },
    role:{
        type:String,
        default:"user"
    }
})

const users=mongoose.model("users",userSchema)
module.exports=users