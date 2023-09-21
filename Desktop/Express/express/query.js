import express from "express";
const app=express()
const port=3001
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userData=[
    {id:1,name:'debug',company:'google'},
    {id:2,name:'media',company:'microsoft'},
    {id:3,name:'sanjay',company:'facebook'}
]

app.get("/user",(req,res)=>{
    res.json(userData)

})
app.post('/user',(req,res)=>{
    const query=parseInt(req.query.id)
    const username=req.query.name
    const filteredUserData=userData.filter((data)=>{
        if(query&&username){
            return data.id===query&&data.name===username

        }else{
            return data
        }
    })
    res.json(filteredUserData)
})

app.post('/user/:id/:name',(req,res)=>{
    const userId=parseInt(req.params.id)
    const username=req.params.name
    const filteredUserData=userData.filter((data)=>data.id===userId && data.name===username)
    res.json(filteredUserData)
})

app.get("*",(req,res)=>{
    res.json('No Route Available')

})


app.listen(port,()=>{
    console.log(`'run'${port}`);
})