import React, { useContext } from 'react'
import { ShopContext } from './context/ShopContext'
import { useParams } from 'react-router-dom'
import Display from './Display'


const Product = () => {
    const { Products }=useContext(ShopContext)

    const {productId}=useParams()

    const product=Products.find((e)=>e.id===Number(productId))
    console.log(product,'product');
  return (
    <div>
        <Display product={product}/>
    </div>
  )
}

export default Product