import React, { useState } from 'react'
import { Searchapi } from './api'

const Searchbar = ({updateState}) => {
    const[searchedvalue,setSearchedvalue]=useState('')


    const handleSearch=(event)=>{
        setSearchedvalue(event.target.value)
        searchItem()
        
    
    }

    const searchItem=async()=>{
        try{
        let response=await Searchapi(searchedvalue)
        let convertJSON=await response.json()
        updateState(convertJSON.meals)
        console.log(convertJSON.meals);
        }
        catch(error){
            console.log(error.message);
        }
     }
    
  return (
    <div>
        <div>
            <input type='text' placeholder='Search food' onChange={handleSearch}/>
        </div>
    </div>
  )
}

export default Searchbar