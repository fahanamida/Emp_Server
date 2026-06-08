require('dotenv').config()
require('./Connection/connection')


const express=require('express')
const cors=require('cors')

const routes= require('./Routes/routes')
const app=express()

app.use(cors())

app.use(express.json())
app.use(routes)
app.use('/upload', express.static('./upload'))




const PORT=3000 || process.env.PORT

app.listen(PORT,()=>{
    console.log("Server Running at:",PORT)
})