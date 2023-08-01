import React, { useEffect, useState } from 'react'
import CardUI from './CardUI'
import { toast } from 'react-toastify';
import Loading from "./Loading";
import { errorToast,successToast } from "./Toast"

function Home() {


    const [loading,setLoading] = useState(false);
    const [categories,setAllCategories] = useState([]);
  
    

    const getAllCategory = async ()=>{
        
        try {
          
            let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')//API  
            let toConvetJSON = await response.json();//convert to json //await=no repeat
            setAllCategories(toConvetJSON.categories)
            setLoading(false)
            successToast('Your logged in')
            
        } catch (error) {
            setLoading(true)
            console.log(error.message)
            errorToast(error.message)

            
        }

    }

    useEffect(()=>{
        setLoading(true)
        getAllCategory()

    },[])

  return (
    <div className=''>
        { loading ?
           <div className="Loader">
             <Loading/>
           </div>
           :
           <div className="Home">
               {
                categories?.map((items,index)=>{
                    return(
                        <div key={index}>
                            <CardUI data={items}/>
                        </div>
                    )
                })
               }
               
           </div>

        }
        

    </div>
  )
}

export default Home