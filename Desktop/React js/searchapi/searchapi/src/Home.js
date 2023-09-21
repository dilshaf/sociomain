import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar'

import { getCategories } from "./api";
import Loading from "./Loading"
import { Link } from 'react-router-dom';
import Card from "./Card"


function Home() {

    const [categories, setCategories] = useState([]);
    const [filterCount,setFilterCount] = useState(2);
    const[loading,setLoading]=useState(false)

    const getAllCategories = async () => { //third


        try {
            let response = await getCategories()
            let toConvetJSON = await response?.json();//next line setCategories(toconvertjson)
            let filteredCategories = toConvetJSON?.meals?.filter((elements,index)=> index < filterCount  )
            setCategories(filteredCategories)
            setLoading(false)
        
        } catch (error) {

        }
    }


    useEffect(() => { //second
        setLoading(true)

        getAllCategories()

        return () => {

        }
    }, [filterCount])

    const handleSelectChange = (e)=>{
        setFilterCount(e.target.value)
    }

    const ifSearchUpdateState = (argument)=>{
        setCategories(argument) //chicken
    }



    return ( //first
        <>


            <div style={{textAlign:"center",paddingBottom:'5rem'}} >
            <Searchbar  updateState={ifSearchUpdateState} />

            <select className='select-container' onChange={handleSelectChange} >
                <option value="2">2</option>
               

                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
            </select>

            <div className="container">
                {
                 loading? <Loading/>:

                categories?.length>0 ? 
                    categories?.map((item,index)=>{
                        
                        return(
                            <>
                           <Link to={`/product/${item.idMeal}`}  key={index}><Card data={item} /></Link>
                          
                           </>
                        )
                    })
                    :
                         "nottttt"
                }
                
            </div>


        </div>
       
        </>
    )
}

export default Home