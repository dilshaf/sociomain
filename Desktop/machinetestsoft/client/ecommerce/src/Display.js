import React, { useContext } from 'react'
import { ShopContext } from './context/ShopContext'


const Display = (props) => {
    const {product}=props
    const {addtoCart}=useContext(ShopContext)
  return (
    <div>
        <p>{product.name}</p>
        
        <button onClick={()=>{addtoCart(product.id)}}>Add to Cart</button>
    </div>
  )
}

export default Display