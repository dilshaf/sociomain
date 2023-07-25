import React from "react";
function Mapdisplay(props){
    const{  Name,Age,hobbies}=props
    return(
        <>
        <h1>Name:{Name},Age:{Age},HOBBIES:{hobbies}</h1>
        </>
    )
}
export default Mapdisplay