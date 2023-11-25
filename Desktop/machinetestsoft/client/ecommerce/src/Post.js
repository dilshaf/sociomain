import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Post = () => {
    const [name,setName]=useState('')
    const[prices,setPrices]=useState('')
    const[description,setDescription]=useState('')


    const submitData=async()=>{
        let response=await axios.post('http://localhost:9001/api/cart/add',{
            name:name,
            prices:prices,
            description:description
        })
        console.log(response);

    }


    const nameFunction=(e)=>{
        setName(e.target.value)
    }
    const priceFunction=(e)=>{
        setPrices(e.target.value)
    }
    const descriptionFunction=(e)=>{
        setDescription(e.target.value)
    }



  return (
    <div>
        <form onSubmit={submitData}>
            <label>ProductName</label>
            <input type='text' onChange={nameFunction}/>
            <label>Price</label>
            <input type='text' onChange={priceFunction}/>
            <label>description</label>
            <input type='text' onChange={descriptionFunction}/>
            <button>Submit</button>
            <Link to='/get'><button>View</button></Link>
        </form>
    </div>
  )
}

export default Post