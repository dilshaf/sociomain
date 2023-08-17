import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import images from "./images.png"
import github from "./github.png"
import hackerrank from "./hackerrank.png"
import linkedin from "./linkedin.png"

// import navIcon1 from "./nav-icon1.svg"
// import navIcon2 from "./nav-icon2.svg"
// import navIcon3 from "./nav-icon3.svg"


function NavBar() {
    const[activeLink,setActiveLink]=useState('')
    const[scrolled,setScrolled]=useState(false)

    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll",onScroll)
        return()=>window.removeEventListener("scroll",onScroll)
    },[])

    const onUpdateActiveLink=(value)=>{
        setActiveLink(value)
    }
  return (
    <div>
         <Navbar expand="lg" className={scrolled?"scrolled":""} >
      <Container>
        <Navbar.Brand href="#home">
           <img src={images} alt='logo'/>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==="home"?"navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==="skills"?"navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==="projects"?"navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink("projects")}>Projects</Nav.Link>
         </Nav>
         <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/fathima-dilsha-p-235001286/'><img src={linkedin} alt="" className='git'/></a>
                <a href='https://github.com/dilshaf'><img src={github} alt="" className='git'/></a>
                <a href='https://www.hackerrank.com/dilshadilu4953'><img src={hackerrank} alt="" className='git'/></a>

            </div>
            <button className='vvd' onClick={()=>console.log('connect')}><span>Let's connect</span></button>
         </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar