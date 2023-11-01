const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const {mongoose}=require('mongoose')
const router = require('./routes/authRoutes')
const { Forms } = require('./models/form')










dotenv.config()


const connect = async (next) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to database');
    } catch (error) {
        const { status, message } = error;
        console.log(message);
    }
}


const app=express()
const port=7000
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use('/',require('./routes/authRoutes'))
// app.use('/api',formRouter)
// app.use('/api',getRouter)
// app.use('/api',updategetRouter)
// app.use('/api',updateData)
// app.use('/api',deleteData)



app.post("/api/register", async (req, res) => {
    const { name, email, password } = req.body
    const newUser = new Forms({ name, email, password })

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.json(error.message);
    }

})

//get
app.get("/api/get", async (req, res) => {
    try {
        const savedUser = await Forms.find();

        // savedUser

        res.status(200).json(savedUser);
        console.log(savedUser)
    } catch (error) {
        res.json(error.message);
    }
})


//update
app.get('/api/:id', async(req,res)=> {
    const { id } = req.params
    try{
        const getId = await Forms.findById(id)
        res.json(getId)
    }catch(error) {
        console.log(error.message);
    }
})

app.put('/api/update/:id', async (req, res) => {
    const { id } = req.params
    const { name, email, password } = req.body

    try {
        const updateedUser = await Forms.findByIdAndUpdate(id, { $set: { name, email, password } }, { new: true })
    } catch (error) {
        res.json(error.message)
    }
})

//delete
app.delete('/api/delete/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deleteUser = await Forms.findByIdAndDelete(id)
        res.status(201).json("deleted")
    } catch (error) {
        res.json(error.message)
    }

})





app.listen(port,()=>{
    connect()
    console.log(`server is running',${port}`)})