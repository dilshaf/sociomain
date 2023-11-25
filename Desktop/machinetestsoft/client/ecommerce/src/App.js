import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

const App = () => {
  const [details,setDetails]=useState([])

  const getTheDetails=async()=>{
    try {
      let response=await axios.get('http://localhost:9001/api/products')
      setDetails(response.data)
      
    } catch (error) {
      console.log(error.message);
      
    }
    
  }


  useEffect(()=>{
    getTheDetails()
  },[])
  return (
    <div>

      {
        details.map((items,index)=>{
          return(
            <div key={index}>
              <Card data={items}/>
              </div>
          )
        })
      }
      
    </div>
  )
}

export default App