import React from "react";
import "./Layout.css"
import { Link,Outlet } from "react-router-dom";
function Layout(){
    return(
        <div style={{display:"flex"}}>
        <div className="sidelink">
            <div className="buttons">
                //to display
        
        <button className="btn"><Link to="/account" className="link">Account</Link></button><br/><br/>
      <button className="btn"> <Link to="/application" className="link">Application</Link></button><br/><br/>
       <button className="btn"><Link to="/notification" className="link">Notification</Link></button><br/><br/>
       <button className="btn"><Link to="/password" className="link">Password</Link></button><br/><br/>
       <button className="btn"><Link to="/security" className="link">Security</Link></button><br/><br/>
       </div>
       </div>
       <div style={{width:"180%"}}>
       <Outlet/>   //display
       </div>
     
       



        </div>
    )
}
export default Layout