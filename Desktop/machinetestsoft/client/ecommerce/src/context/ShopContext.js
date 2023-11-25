import React, { createContext, useState } from "react";
import Products from '../data';


export const ShopContext=createContext(null)

const getCart=()=>{
    let cart={}
    for(let index=0;index<Products.length+1;index++){
        cart[index]=0
    }
    return cart
}

const ShopContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState(getCart())

    const addtoCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const contextvalue={addtoCart,cartItems,Products}
    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}

        </ShopContext.Provider>
    )
}
export default ShopContextProvider
