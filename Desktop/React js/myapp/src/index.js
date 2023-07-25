import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Details from './Details'
import Review from "./Review"
import About from "./About"





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
 
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        
        <Route path="/about" element={<About/>}></Route>
        <Route path="/details" element={<Details/>}></Route>
        <Route path="/review" element={<Review/>}></Route>
       
        
    </Routes>
    </BrowserRouter>
   
 
);


