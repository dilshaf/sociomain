import React, { useEffect, useState } from 'react'
import { Categoriesapi } from './api'
import CardUI from "./CardUI"
import Searchbar from './Searchbar'
import { Link } from 'react-router-dom'

const Home = () => {
  const[categories,setCategories]=useState([])
  const[filtercount,setFiltercount]=useState(2)
  


  const mealCategories=async()=>{
    try{  
    let response= await Categoriesapi()
    let convertJSON=await response.json()
    let filteredCategories = convertJSON?.meals?.filter((elements,index)=> index < filtercount  )
    // setCategories(convertJSON.categories)
    setCategories(filteredCategories)

    
    
    
    }catch(error){
      console.log(error.message);
    }
  }

  useEffect(()=>{
    mealCategories();

    return ()=>{

    }
  },[filtercount])


  const ifserachedupdate=(argument)=>{
    setCategories(argument)
  }

  const filterupdate=(event)=>{
    setFiltercount(event.target.value)
  }
  
  return (
   <>
   <div>
    <Searchbar updateState={ifserachedupdate}/>
   </div>
   <div>
    <select onChange={filterupdate}>
      <option value="2">2</option>
      <option value="4">4</option>
      <option value="6">6</option>
      <option value="8">8</option>
      <option value="10">10</option>
      <option value="12">12</option>
    </select>
   </div>

   <div className="container">
                {
                 

                
                    categories?.map((item,index)=>{
                        console.log(item,"homeeeeee");
                        return(
                            <>
                           <Link to={`/product/${item.idMeal}`}  key={index}><CardUI data={item} /></Link>
                          
                           </>
                        )
                    })
                    
                }
                
            </div>
   </>
  )
}

export default Home