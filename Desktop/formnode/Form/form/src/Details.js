import React, { useState, useEffect } from "react";
import Card from "./Card";



function Details() {
  const [details, setDetails] = useState([]);

  const getDetailsapi= async()=>{
    let response= await fetch(`http://localhost:3005/api`);
    let toConvetJSON=await response.json();
    setDetails(toConvetJSON)
    console.log(toConvetJSON);
  }

  useEffect(() => {
   getDetailsapi()
      
  }, []);

  return (
    <div className="App">
      {
        details.map((item)=>{
          return(
            <>
            <Card data={item}/>
            </>
          )

        })
      }
    </div>
  );
}


export default Details