const express=require('express')

const jwtmiddle=require('../MiddleWares/jwtmiddleware')
const multterMiddleware=require('../MiddleWares/multterMiddleware')

const employeeController=require('../Controllers/employeeController')
const userController=require('../Controllers/userController')

const router=express.Router()

router.post('/signup',userController.signUp)
router.post('/signin',userController.signIn)
router.post('/add-emp',jwtmiddle,multterMiddleware.single('photo'),employeeController.addEmployees)
router.get('/list-emp',jwtmiddle,employeeController.getEmployeeList)
router.delete('/delete-emp/:eid',jwtmiddle,employeeController.deletEmployee)
router.put('/update-emp/:eid',jwtmiddle,multterMiddleware.single('photo'),employeeController.updateEmployee)


module.exports=router