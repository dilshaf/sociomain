import React from "react";
import Mapdisplay from "./Mapdisplay";
function Map(){

    let emp=[
        {
            Name:"dilsha",
            Age:21,
            Hobbies:"reading"
        },
        {
            Name:"dilna",
            Age:20,
            Hobbies:"rea"

        }
    ]
    return(
        <>{
      emp.map((values)=>{
        return (
            <Mapdisplay {...values}/>
        )
       })
    }
        </>
    )
}
export default Map