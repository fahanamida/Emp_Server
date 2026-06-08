const users=require('../Models/userModel')
const jwt=require('jsonwebtoken')
exports.signUp=async(req,res)=>{
    try{
        const {username,email,password}=req.body
        const existingUser=await users.findOne({email})
        if(existingUser){
            res.status(400).json("User Already Exists !!")
        }
        else{
            const newUser=new users({
                username,email,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

exports.signIn=async(req,res)=>{
    try{
        const {email,password}=req.body
        const existingUser=await users.findOne({email,password})
        if(existingUser){
            const token=jwt.sign({"id":existingUser._id},process.env.SECRET_KEY)
            res.status(200).json({token:token})
        }
        else{
            res.status(400).json("Invalid email/password")
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}