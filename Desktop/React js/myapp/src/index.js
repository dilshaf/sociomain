import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Details from './Details'
import Review from "./Review"
import About from "./About"
import Error from './Error';
import Layout from './Layout';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>

        <Route path="/home" element={<Home/>}></Route>
        
        <Route path="/about" element={<About/>}></Route>
        <Route path="/details" element={<Details/>}></Route>
        <Route path="/review" element={<Review/>}></Route>
        <Route path="*" element={<Error/>}></Route>
        </Route>
        
       
        
    </Routes>
    </BrowserRouter>
   
 
);


