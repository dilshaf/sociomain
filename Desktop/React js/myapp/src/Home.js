import React from "react";
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
        <div>hello home!</div>
        
        
       <button> <Link to="/about">About</Link></button>
        <br/>
        <button><Link to="/details">Details</Link></button>
        <br/>
        <button><Link to="/review">Review</Link></button>
        </>
    )
}
export default Home