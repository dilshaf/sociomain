import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import Soft from './models/User.js'

const app=express()
const port=9001

app.use(express.json())
app.use(cors())


const connect=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/soft')
        console.log('connected to database');
    } catch (error) {
        console.log(error.message);
        
    }
}
app.get('/api/products',async(req,res)=>{
    try {
        const getProducts=await Soft.find()
        res.status(201).json(getProducts)
    } catch (error) {
        res.status(401).json(error.message)
        
    }
})

app.post('/post/cart',async(req,res)=>{
    const {name,prices,description}=req.body
    const saveduser=new Soft({name,prices,description})
    try {
        const newuser=await saveduser.save()
        res.status(201).json(newuser)
    } catch (error) {
        res.status(401).json(error.message)

        
    }
})

app.get('/api/cart/:id',async(req,res)=>{
    const { id }=req.params
    
    try {
       const  getCartItems=await Soft.findById(id)
       res.status(201).json(getCartItems)
    } catch (error) {
        res.status(401).json(error.message)
        
    }
})


app.post('/api/cart/add',async(req,res)=>{
    const {name,prices,description}=req.body
    const saveduser=new Soft({name,prices,description})
    try {
        const newuser=await saveduser.save()
        res.status(201).json(newuser)
    } catch (error) {
        res.status(401).json(error.message)

        
    }
})


app.listen(port,()=>{
    connect()
    console.log(`port is connected ${port}`);
})