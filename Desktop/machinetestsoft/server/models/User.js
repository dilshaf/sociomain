import {Schema,model} from 'mongoose'


const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    prices:{
        type:String,
        required:true
    }
},{timestamps:true})

const Soft=model('soft',UserSchema)
export default Soft