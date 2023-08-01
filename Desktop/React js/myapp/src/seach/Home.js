import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import Card from "./Card";
import { getCategories } from './api';

function Home() {

    const [categories, setCategories] = useState([]);
    const [filterCount,setFilterCount] = useState(2);

    const getAllCategories = async () => {

        try {
            let response = await getCategories()
            let toConvetJSON = await response?.json();
            let filteredCategories = toConvetJSON?.categories?.filter((elements,index)=> index < filterCount  )
            setCategories(filteredCategories)
        
        } catch (error) {

        }
    }


    useEffect(() => {
        getAllCategories()

        return () => {

        }
    }, [filterCount])

    const handleSelectChange = (e)=>{
        setFilterCount(e.target.value)
    }

    const ifSearchUpdateState = (argument)=>{
        setCategories(argument)
    }



    return (
        <div style={{textAlign:"center",paddingBottom:'5rem'}} >
            <SearchBox updateState={ifSearchUpdateState} />

            <select className='select-container' onChange={handleSelectChange}>
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
                    categories?.map((item)=>{
                        console.log(item,);
                        return(
                            <Card data={item} />
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Home