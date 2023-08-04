import React,{useState,useEffect} from 'react'
import Loading from './Loading';
import CardAPI from './CardAPI';
import "./Stylecss.css"

function Home1() {
    const[loading,setLoading]=useState(false);
    const[categories,setCategories]=useState([])

    const getAllCategory = async ()=>{

   let response=await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
   console.log(response);
   
   let toConvertJSON=await response.json()
   
   setCategories(toConvertJSON.categories)
   console.log(toConvertJSON.categories);
   setLoading(false)
    }
    useEffect(()=>{ //second
      setLoading(true)
      getAllCategory()

  },[])


    
  return (
    
    <>
    <h1 className='head'>RECIPIES & DESCRIPTION</h1>
    {
        loading?
        <div><Loading/></div>
        :
        <div className="Home1">
               {
                categories?.map((items,index)=>{
                    return(
                        <div key={index}>
                            <CardAPI data={items} />
                        </div>

                        
                    )
                })
               }
               
           </div>
        
          
                  
  
   
  
}

</>
  )
}

export default Home1