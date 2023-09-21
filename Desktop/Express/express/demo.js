import express from 'express'
import mongoose from 'mongoose'


const app=express()
const port=4000

app.use(express.json()) //tell express this is a json

app.get('/api/users',async(req,res)=>{
    let result=await mongoose.connection.collection('users').find().toArray()
    console.log('users');
    res.json('users')
    console.log(result);
    res.json(result)

})

// app.post('/api/users',(req,res)=>{
//     const {email,password}=req.body
//     mongoose.connection.collection('users').insertOne({email,password})
//     console.log('created');
//     res.json('created')
    
// })

// app.post('/api/users',(req,res)=>{
//     console.log(req.body);
//     // let name='n';
//     // let place='c'
//     const{name,place}=req.body
//     mongoose.connection.collection('users').insertOne({name,place})
//     res.json("post method users")
// })

const connect_mongodb=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/demo').then(()=>{
        console.log('mongodb connected');
    }).catch((err)=>console.log(err.message))
}

app.listen(port,()=>{
    connect_mongodb()
    console.log("run",{port});
})