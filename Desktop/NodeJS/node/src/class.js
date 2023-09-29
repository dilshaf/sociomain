import express from "express"
const app=express()
app.get('/home',(req,res)=>{
    console.log("home");
    
})
app.listen(3000,()=>{
    console.log('run');
})