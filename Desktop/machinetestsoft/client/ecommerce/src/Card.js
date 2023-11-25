import axios from 'axios'
import React, { useContext } from 'react'

import { Link } from 'react-router-dom'


const Card = ({data}) => {
    const{name,prices,description,id}=data

    const postCart=async()=>{
        let response=await axios.post('http://localhost:9001/post/cart',{
            name:name,
            prices:prices,
            description:description
        })
        console.log(response);

    }
   
   
  return (
    <div>
      <p>{name}</p>
        <p>{prices}</p>
        <p>{description}</p>
        {/* <Link to='/cart'><p>Cart</p></Link> */}
        <Link to='/cart'><button onClick={postCart}>ADD TO CART</button></Link>
        
    </div>
  )
}

export default Card