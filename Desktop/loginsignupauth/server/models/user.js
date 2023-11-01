const { Schema, model } =require('mongoose');

const AdminSchema = new Schema({
   
    firstname: {
        type: String,
        
    },
    lastname: {
        type: String,
        
    },
    password: {
        type: String,
      
    },
    email:{
        type:String,
        unique:true
    }
   
}, { timestamps: true })

const UserModel = model("Admin", AdminSchema);

module.exports=UserModel