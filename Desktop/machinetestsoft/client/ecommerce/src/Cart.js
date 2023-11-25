import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Cart = () => {
    const[cart,setCart]=useState([])

    // const {id}=useParams()

    const getCart=async(id)=>{
        let response=await axios.get(`http://localhost:9001/api/cart`)
        setCart(response.data)

    }


    useEffect=()=>{
        getCart()
    }
  return (
    <div>
        {
            cart.map((items,index)=>{
                return(
                    <div key={index}>
                        <p>{items.name}</p>
                        </div>
                )
            })
        }
    </div>
  )
}

export default Cart