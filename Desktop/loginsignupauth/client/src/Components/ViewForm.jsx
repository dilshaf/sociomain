import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';


function ViewForm() {
    const [details, setDetails] = useState([]);

const getDetails = async() => {
  try {
    let response = await axios.get(`http://localhost:7000/api/get`)
    setDetails(response.data)
    // console.log(toJSON);
    
  } catch (error) {
    console.log(error.message);
  }
}


useEffect(()=>{
getDetails()
},[])


  return (
    <div className="App">
      {
        details?.map((item)=>{
          return(
            <>
            <Card data={item}/>
            
            </>
          )

        })
      }
    </div>
  )

    }
export default ViewForm