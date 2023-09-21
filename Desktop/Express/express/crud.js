import express from "express"
import mongoose from "mongoose"
const crud=express()
const port=5000

crud.use(express.json())


//get method
crud.get('/api/crud',async(req,res)=>{
    let result=await mongoose.connection.collection('crud').find().toArray()
    console.log(result,'oooo');
    res.json(result)
    
    // console.log('get method');
    // res.json("get connect")
})

//post method
// crud.post('/api/crud',(req,res)=>{
//     console.log('post connected');
//     // const{email,password}=req.body
//     const email="dilsha@gmail.com"
//     const password="12345678"
//     mongoose.connection.collection("crud").insertOne({email:email,password:password})
//     res.json('post methood created')
//     console.log(email,password);

// })
crud.post('/api/crud',(req,res)=>{
    console.log('post connected');
    const{email,password}=req.body //ith cheyyumbho crud .use expressjson kodkkanam
    mongoose.connection.collection("crud").insertOne({email,password})
    res.json('post methood created')
    console.log('created');
    console.log(email,password);

})

//put method
crud.put('/api/crud/:id',(req,res)=>{
    console.log('put method connected',req.params.id);
    const id=req.params //kodknna id
    console.log(id);
    let result= new mongoose.Types.ObjectId(id) //convert obj to string
    console.log(result);
    mongoose.connection.collection('crud').updateOne({_id:result},{
        $set:
        {
            email:req.body.email,
            password:req.body.password
        }
    })
    res.json('updated')

})

//delete method

crud.delete('/api/crud/:id',(req,res)=>{
    console.log('deleted');
    const id=req.params
    console.log(id);
    let result= new mongoose.Types.ObjectId(id) //convert obj to string
    console.log(result);
    mongoose.connection.collection('crud').deleteOne({_id:result})
        res.json('deleted sucessfully')
    
})

//connect mongodb
const connect_mongodb=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/demo').then(()=>{
        console.log('mongodb connected');
    }).catch((err)=>console.log(err.message))
}

crud.listen(port,()=>{
    connect_mongodb()
    console.log(`run ${port}`);
})