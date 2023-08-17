import React from 'react'



import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import "./App.css"
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import {Projects} from "./Components/Projects"
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
// import { MailchimpForm } from './Components/MailchimpForm';        
// import ContactForm from './Components/Contactform';




function App() {
  return (
    <div>
     <NavBar/>
     <Banner/>
     <Skills/>
     <Projects/>
     <Contact/>
     {/* <MailchimpForm/> */}
     <Footer/>
     

    </div>
  )
}

export default App
