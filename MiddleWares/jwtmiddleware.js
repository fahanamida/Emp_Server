const jwt=require('jsonwebtoken')

const jwtmiddle=(req,res,next)=>{
    try{
        console.log("Request at JWT Middleware")
        const token =req.headers.authorization.split(" ")[1]
        const value = jwt.verify(token,process.env.SECRET_KEY)
        req.payload=value.id
        next()
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports=jwtmiddle