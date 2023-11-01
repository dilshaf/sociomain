

// const Data=require('../models/form')
// const registerPost=async(req,res)=>{
//     const { name, email, password } = req.body
//         const newUser =new Data({name,email,password})
    
//         try {
//             const savedUser = await newUser.save();
//             res.status(201).json(savedUser);
//         } catch (error) {
//             res.json(error.message);
//         }
    
// }
// const registerGet=async(req,res)=>{
//     try {
//         const savedUser = await Data.find()

//         // savedUser

//         res.status(200).json(savedUser);
//         console.log(savedUser)
//     } catch (error) {
//         res.json(error.message);
//     }
// }

// const registerUpdateGet=async(req,res)=>{
//     const { id } = req.params
//     try{
//         const getId = await Data.findById(id)
//         res.json(getId)
//     }catch(error) {
//         console.log(error.message);
//     }
// }

// const registerUpdateData=async(req,res)=>{
//     const { id } = req.params
//     const { name, email, password } = req.body

//     try {
//         const updateedUser = await Data.findByIdAndUpdate(id, { $set: { name, email, password } }, { new: true })
//     } catch (error) {
//         res.json(error.message)
//     }
// }
// const registerDelete=async(req,res)=>{
//     const { id } = req.params
//     try {
//         const deleteUser = await Data.findByIdAndDelete(id)
//         res.status(201).json("deleted")
//     } catch (error) {
//         res.json(error.message)
//     }
// }
// module.exports={registerPost,registerGet,registerUpdateGet,registerUpdateData,registerDelete};