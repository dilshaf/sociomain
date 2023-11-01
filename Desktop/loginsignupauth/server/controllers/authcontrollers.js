const User=require('../models/user')
const {comparePassword, hashPassword}=require('../helpers/auth')
// const { compare } = require('bcrypt')
// const User = require('../models/user')

const test=(req,res)=>{
    res.json('is working')
}

const registerUser=async(req,res)=>{
    try{
        const{firstname,lastname,email,password}=req.body
        //check if name was entered
        if(!firstname){
            return res.json({
                error:'name is required'
            })
        }
        if(!lastname){
            return res.json({
                error:'name is required'
            })
        }
        //check password
        if(!password||password.length<6){
            return res.json({
                error:'password is required and should be atleast 6 characters long'
            })
        }

        //check email
        const exist=await User.findOne({email})
        if(exist){
            return res.json({
                error:'email is already taken'
            })
        }

        const hashedPassword=await hashPassword(password)
        //create user in database
        const user=await User.create({
            firstname,lastname,email,password:hashedPassword,

        })
        return res.json(user)


    }catch(error){
        console.log(error.message);

    }
}




//Login Page
const loginUser=async(req,res)=>{
    try{
        const{email,password}=req.body
        //check if user exist
        const user=await User.findOne({email})
        if(!user){
            return res.json({
                error:'user not found'
            })
        }

        //check if password exist
        const match=await comparePassword(password,user.password)
        if(match){
            res.json('password match')
        }
        if(!match){
            res.json({
                error:'password nor match'
            })
        }


    }catch(error){
        console.log(error.message);

    }

}
module.exports={
    test,
    registerUser,loginUser
}