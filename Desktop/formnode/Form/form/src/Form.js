import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Form = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    
    const onSubmit=async(e)=>{
        e.preventDefault()
    

    try{
        const response=await axios.post('http://localhost:3005/api/register',{
            name:name,
            email:email,
            password:password
        })
        console.log(response.data);
    }catch(error){
        console.log(error);
    }
}

const nameFunction=(e)=>{
    setName(e.target.value)
    console.log(e.target.value);


}
const emailFunction=(e)=>{
    setEmail(e.target.value)
    console.log(e.target.value);

}
const passwordFunction=(e)=>{
    setPassword(e.target.value)
    console.log(e.target.value);

}
  return (
    <div>
        <form onSubmit={onSubmit}>
            <label>Name:</label>
            <input type='text' id='name' onChange={nameFunction}></input>
            <br/>
            <label>Email:</label>
            <input type='email' id='email' onChange={emailFunction}></input>
            <br/>
            <label>password</label>
            <input type='password' id='password' onChange={passwordFunction}></input>
            <input type='submit'></input>
           <Link to='/details'> <button>View details</button></Link>
           
          
        </form>
    </div>
  )
}

export default Form