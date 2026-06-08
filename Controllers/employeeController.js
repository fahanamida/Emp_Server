const employees=require('../Models/employeeModel')

exports.addEmployees=async(req,res)=>{
    try{
        const {name,phone,skill}=req.body
        const photo=req.file.filename
        const exixtingEmp=await employees.findOne({phone})
        if(exixtingEmp){
            res.status(400).json("Employee Already Exist !!")
        }
        else{
            const newEmp=new employees({
                name,phone,skill,photo
            })
            await newEmp.save()
            res.status(200).json(newEmp)
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


exports.getEmployeeList=async(req,res)=>{
    try{
        const employeeList=await employees.find()
        res.status(200).json(employeeList)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

exports.deletEmployee=async(req,res)=>{
    try{
        const {eid}=req.params
        //console.log(eid)
        const deleteEmp=await employees.findByIdAndDelete(eid)
        res.status(200).json("Employee Deleted")
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

exports.updateEmployee=async(req,res)=>{
    try{
        const {eid}=req.params
        const {name,photo,phone,skill}=req.body
        const img=req.file?req.file.filename:photo
        const updateEmp=await employees.findByIdAndUpdate(eid,{
            name,phone,photo:img,skill
        },{new:true})
        res.status(200).json(updateEmp)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}