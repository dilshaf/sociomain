import React from "react";
import { Link,Outlet } from "react-router-dom";
function Layout(){
    return(
        <>
        <div style={{backgroundColor:"lightcyan",display:"flex"}}>
        
        <Link to="/home">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/details">Details</Link>
       <Link to="/review">Review</Link>
       <Outlet/>
       </div>
       



        </>
    )
}
export default Layout