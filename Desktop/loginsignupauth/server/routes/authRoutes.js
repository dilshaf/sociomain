const express=require('express')
const router=express.Router()
const cors=require('cors')
const {test,registerUser,loginUser}=require('../controllers/authcontrollers')
const {formSubmit,getSubmit}=require('../controllers/formRegister')

// router.use(cors({
//     credentials:true,
//     origin:'http://localhost:5173'
// }))

router.use(cors())

//create
router.get('/',test)
//post
router.post('/register',registerUser)
router.post('/login',loginUser)



module.exports=router